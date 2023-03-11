function generateMarkdown(formData) {
    // collect data
    const githubUsername = formData.GithubLink;
    const personalStatement = formData.personalStatement;
    const name = formData.Name;
    let work = formData.work;
    const lanuageSkills = formData.selectedLanguages;
    const frontendSkills = formData.selectedFrontend;
    const backendSkills = formData.selectedBackend;
    const socialLinks = formData.socialLinksObj;
    const gitStats = formData.displayGitStats;
    const gitTopSkill = formData.displayTopSkills;

    // modify work
    work = work.replace(/\n/g, "\n\n");

    const generateSkillsMarkdown = () => {
        let skillsMarkdown = "\n\n## My Skill Set\n<table align='center'><tr>";
        if (lanuageSkills.length !== 0) {
            skillsMarkdown += '<td style="width: 25%; vertical-align: top; text-align:center;"> \n\n### **Languages** \n <div align="center">';
            const langMarkdown = lanuageSkills.map((data) => `<img style="margin: 5px" src="${data}" alt="React" width="40" height="40" />`);
            skillsMarkdown += langMarkdown.join("") + "</div></td>";
        }
        if (frontendSkills.length !== 0) {
            skillsMarkdown += '<td style="width: 25%; vertical-align: top; text-align:center;"> \n\n### **Frontend** \n <div align="center">';
            const frontMarkdown = frontendSkills.map((data) => `<img style="margin: 5px" src="${data}" alt="React" width="40" height="40" />`);
            skillsMarkdown += frontMarkdown.join("") + "</div></td>";
        }
        if (backendSkills.length !== 0) {
            skillsMarkdown += '<td style="width: 25%; vertical-align: top; text-align:center;"> \n\n### **Backend** \n <div align="center">';
            const backMarkdown = backendSkills.map((data) => `<img style="margin: 5px" src="${data}" alt="React" width="40" height="40" />`);
            skillsMarkdown += backMarkdown.join("") + "</div></td> ";
        }
        skillsMarkdown += "</tr></table>";

        return skillsMarkdown;
    };

    const generateSocialMarkdown = () => {
        let socialMarkdown = "";
        if (socialLinks) {
            socialMarkdown += "<div> \n\n## Contact Me\n";
            for (let key in socialLinks) {
                socialMarkdown += `<a href="${socialLinks[key]}" target="_blank" style="display: inline-block; margin-right: 12px;"> <img src="https://img.shields.io/badge/${key}-%2300acee.svg?&style=for-the-badge&logo=${key}&logoColor=white" alt=${key} style="margin-bottom: 5px;" /></a>`;
            }
            socialMarkdown += "<div/>";
        }

        return socialMarkdown;
    };

    const generateGitHubStats = () => {
        let gitStatsMarkdown = "";
        if (gitStats) {
            gitStatsMarkdown += `\n\n## Github Stats \n<div align="center"><img src="https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&count_private=true&hide_border=true" align="center" /></div>  `;
        }
        return gitStatsMarkdown;
    };

    const generateGitHubTopSkill = () => {
        let gitSkillMarkdown = "";
        if (gitTopSkill) {
            gitSkillMarkdown += `\n\n## Most Used Languages \n<div align="center"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=codemaker2015&layout=compact" align="center" /></div>  `;
        }
        return gitSkillMarkdown;
    };

    const imgLink = "https://raw.githubusercontent.com/devSouvik/devSouvik/master/gif3.gif";
    // About Section
    const aboutMarkdown = `# Hey 👋, I'm ${name}\n## Glad to see you here!\n${personalStatement}\n\n ## Rapidfire\n <table><tr><td valign="top" width="50%">${work}</td><td valign="top" width="50%"><div align="center"><img src="${imgLink}" align="center" style="width: 100%" /></div> </td></tr></table>`;
    const skillsMarkdown = generateSkillsMarkdown();
    const socialMarkdown = generateSocialMarkdown();
    const gitStatsMarkdown = generateGitHubStats();
    const gitSkillMarkdown = generateGitHubTopSkill();

    let markdown = aboutMarkdown;
    markdown += skillsMarkdown;
    markdown += socialMarkdown;
    markdown += gitStatsMarkdown;
    markdown += gitSkillMarkdown;

    return markdown;
}

module.exports = generateMarkdown;
