function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  const badges = {
    MIT: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    GPLv3: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    Apache: "![License: Apache](https://img.shields.io/badge/License-Apache%202.0-red.svg)",
    BSD: "![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)",
  };
  return badges[license] || "";
}

function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }
  const links = {
    MIT: "[MIT License](https://opensource.org/licenses/MIT)",
    GPLv3: "[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)",
    Apache: "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)",
    BSD: "[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)",
  };
  return links[license] || "";
}

function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return `## License

This project is licensed under the ${renderLicenseLink(license)}.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions, you can reach out to me via:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

`;
}

export default generateMarkdown;
