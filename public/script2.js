document.addEventListener('DOMContentLoaded', () => {
    const svgRow = document.getElementById('svgRow2');
    const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.686 13.646l-6.597 3.181c-1.438.692-2.755-1.124-2.755-1.124l6.813-3.287 2.539 1.23zm6.168 5.354c-.533 0-1.083-.119-1.605-.373-1.511-.731-2.296-2.333-1.943-3.774.203-.822-.23-.934-.891-1.253l-11.036-5.341s1.322-1.812 2.759-1.117c.881.427 4.423 2.136 7.477 3.617l.766-.368c.662-.319 1.094-.43.895-1.252-.351-1.442.439-3.043 1.952-3.77.521-.251 1.068-.369 1.596-.369 1.799 0 3.147 1.32 3.147 2.956 0 1.23-.766 2.454-2.032 3.091-1.266.634-2.15.14-3.406.75l-.394.19.431.21c1.254.614 2.142.122 3.404.759 1.262.638 2.026 1.861 2.026 3.088 0 1.64-1.352 2.956-3.146 2.956zm-1.987-9.967c.381.795 1.459 1.072 2.406.617.945-.455 1.405-1.472 1.027-2.267-.381-.796-1.46-1.073-2.406-.618-.946.455-1.408 1.472-1.027 2.268zm-2.834 2.819c0-.322-.261-.583-.583-.583-.321 0-.583.261-.583.583s.262.583.583.583c.322.001.583-.261.583-.583zm5.272 2.499c-.945-.457-2.025-.183-2.408.611-.381.795.078 1.814 1.022 2.271.945.458 2.024.184 2.406-.611.382-.795-.075-1.814-1.02-2.271zm-18.305-3.351h-3v2h3v-2zm4 0h-3v2h3v-2z"/></svg>`;

    const containerWidth = svgRow.clientWidth;
    const svgWidth = 40; // Ajusta esto según el max-width del SVG en CSS

    const numberOfSVGs = Math.ceil(containerWidth / svgWidth);

    for (let i = 0; i < numberOfSVGs; i++) {
        const svgContainer = document.createElement('div');
        svgContainer.classList.add('svg-container');
        svgContainer.innerHTML = svgIcon;
        svgRow.appendChild(svgContainer);
    }
});
