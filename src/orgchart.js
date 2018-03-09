// const $ = require('jquery');
// require('jquery.panzoom');
// const dragscroll = require('dragscroll');

// if (!$)
//   throw new Error('Orgchart: Must include jquery');

if (!window.google || !window.google.charts)
  throw new Error('Orgchart: Must include google charts script loader: ' + 
    'https://www.gstatic.com/charts/loader.js');

google.charts.load('current', { packages: ['orgchart'] });

// Helper functions:

const formatData = ({ Name = '', Role = '' }) => {
  return `<p><strong>${Name}</strong></p>\
<p><em>${Role}</em></p>`;
};

const formatLegend = ({ Name = '', Role, Email, ImageURL, Link, OtherInfo }) => {
  return `${ImageURL ? `<div class="orgchart-legend-img"><img src="${ImageURL}" alt="${Name}"></div>` : ''}\
<div>\
<p><strong>${Name}</strong></p>\
${Role ? `<p class="orgchart-legend-role"><em>${Role}</em></p>` : ''}\
${OtherInfo ? `<p class="orgchart-legend-otherinfo">${OtherInfo}</p>` : ''}\
${Email ? `<p class="orgchart-legend-email"><a href="mailto:${Email}">${Email}</a></p>` : ''}\
${Link ? `<a class="orgchart-legend-link" href="${Link}" title="${Name} Account Page"></a>` : ''}\
</div>`;
};

const getElement = (el) => {
  if (typeof el === 'string') return document.getElementById(el);
  else if (typeof HTMLElement === 'object' ? el instanceof HTMLElement :
      (el && typeof el === 'object' && el !== null && 
      el.nodeType === 1 && typeof el.nodeName === 'string')) return el;
  else return null;
};

// embedOrgChart
module.exports = (arrayData, element) => {

  // Local variables:

  let selected = null;
  let hovered = null;

  // Verify given element
  const parent = getElement(element);
  if (!parent) {
    console.error('OrgChart: invalid element or id provided');
    return;
  }

  // Remove any existing children
  while (parent.firstChild) parent.removeChild(parent.firstChild);
  parent.style.position = 'relative';
  parent.style.height = '700px';

  const container = document.createElement('div');
  container.classList.add('dragscroll', 'orgchart');
  parent.appendChild(container);

  // const panzoom = document.createElement('div');
  // panzoom.classList.add('orgchart-panzoom');
  // container.appendChild(panzoom);

  const legend = document.createElement('div');
  legend.classList.add('orgchart-legend', 'disabled');
  parent.appendChild(legend); 

  // Perform validity checks on the given data

  if (!arrayData || arrayData.length === 0) {
    container.classList.add('invalid-data-provided');
    console.error('Orgchart Error: undefined or empty user data provided');
    return;
  }

  const persons = {};
  for (const rowData of arrayData) persons[rowData.EmployeeID] = true;
  for (const rowData of arrayData) {
    const manager = rowData.ManagerID;
    if (manager && !(manager in persons)) {
      console.error(`Orgchart Error: employee '${rowData.EmployeeID}' \
has undefined manager '${manager}'`);
      delete rowData.ManagerID;
    }
  }

  const setLegend = (newSelected, newHovered) => {
    if (newSelected !== false) selected = newSelected;

    const newData = newHovered || selected;
    if (newData) {
      legend.innerHTML = formatLegend(newData);

      legend.classList.remove('disabled');          
    } else {
      legend.classList.add('disabled');
    }
  };

  // Wait google charts callback, then create chart with data

  new Promise(resolve => google.charts.setOnLoadCallback(() => resolve()))
  .then(() => {

    const data = new google.visualization.arrayToDataTable([
      [
        { label: 'EmployeeID', type: 'string' },
        { label: 'ManagerID', type: 'string' },
        { label: 'ToolTip', type: 'string' },
      ],
      ...arrayData.map(({ EmployeeID, ManagerID, ...employeeInfo }) => {
        return [
          { v: EmployeeID, f: formatData(employeeInfo) },
          ManagerID,
          'Double click to collapse',
        ];
      }),
    ]);

    const chart = new google.visualization.OrgChart(container);

    // Handle selection and mouse hover
    google.visualization.events.addListener(chart, 'select', () => {
      const rowcol = chart.getSelection()[0];

      if (rowcol) setLegend(arrayData[rowcol.row], false);
      else setLegend(null, false);
    });
    google.visualization.events.addListener(chart, 'onmouseover', ({ row }) => {
      setLegend(false, arrayData[row]);
    });
    google.visualization.events.addListener(chart, 'onmouseout', () => {
      setLegend(false, null);
    });

    // Draw charts
    chart.draw(data, {
      allowHtml: true,
      selectedNodeClass: 'orgchart-node-selected',
      nodeClass: 'orgchart-node',
      allowCollapse: true,
      size: 'large',
    });

    const chartEl = container.children[0];
    
    chartEl.style.transformOrigin = 'top left';

    // Resize chart to fit parent, and center it in parent
    const scaleToFit = () => {
      const ratio = Math.min((container.offsetWidth - 2) / chartEl.offsetWidth,
          (container.offsetHeight - 2) / chartEl.offsetHeight);
      if (ratio < 1) {
        chartEl.style.transform = `scale(${ratio})`;
      }

      const marginLeft = container.offsetWidth / 2 - (chartEl.offsetWidth * (ratio < 1 ? ratio : 1) / 2);
      if (marginLeft >= 0) chartEl.style.marginLeft = `${marginLeft}px`;
      
    };

    scaleToFit();
    window.addEventListener('resize', scaleToFit);

  })
  .catch(console.error);
};
