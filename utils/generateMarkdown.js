// function to generate markdown for README
const renderLicenseBadge=(license) => {
  if(license !== "none")
{
  return `![Github license (https://img.shields.io/badge/license-${license}-blue.svg)]`;
}
return ''
}

const renderLicenseLink = (license) => {
  if (license !== "None") {
    return '* [license] (#license)\n'
  }
  return ''
}

function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}


  ### Description

    ${data.description}

    ## LINK TO VIDEO


    ### Table of contents
    GitHub Link: [${data.githublink}]
    Video Description Link: [${data.videolink}]

    *[Installation] (#Installation)

    *[Usage] (#Usage)

    ${renderLicenseLink(data.license)}
    * [Contributing] (#contributing)

    * [Test] (#tests)

    * [Questions] (#questions)

    ##Installation

    To install necessary dependencies, run the following command:
    \`\`\`
    ${data.installation}
    \`\`\`

    ##Usage

    ${data.usage}

    ## License

    This project is licensed using ${data.license} license.

    ## Contrbuting

    ${data.contributing}

    ##Tests
    To test this ReadMe Generator, run the following command:

    \`\`\`
    ${data.test}
    \`\`\`

    ###Questions

    If you have any questions regarding this repo, open an issue or contact me directly at [${data.email}].

    You can find more of my work at ${data.github} (https://github.com/${data.github}).


    ## Credits

    ## Badges

    ## Features

    ##SCREENSHOTS
`;
}

module.exports = generateMarkdown;
