const tableCTEl = document.querySelector('[data-load-ct]');
const tableRTEl = document.querySelector('[data-load-rt]');
const projectsEl = document.querySelector('[data-insert-string-from-base]');

const renderPostsCT = async () => {
    const uri = 'http://localhost:3000/ct/';
    const res = await fetch(uri);
    const posts = await res.json();
    const post = await posts;
    console.log(posts);
    let templateCT = '';
    post.forEach((CT) => {
        templateCT += `
            <tr>
                <td><a href="details.html?id=${CT.object}">${CT.object}</a></td>
                <td>${CT.district}</td>
            </tr>
        `;
    });
    tableCTEl.innerHTML = templateCT;
};

const renderPostsRT = async () => {
    const uri = 'http://localhost:3000/rt/';
    const res = await fetch(uri);
    const posts = await res.json();
    const post = await posts;
    console.log(posts);
    let templateRT = '';
    post.forEach((RT) => {
        templateRT += `
            <tr>
                <td><a href="details.html?id=${RT.object}">${RT.object}</a></td>
                <td>${RT.district}</td>
            </tr>
        `;
    });
    tableRTEl.innerHTML = templateRT;
};

const renderPostsProjects = async () => {
    const uri = 'http://localhost:3000/projects/';
    const res = await fetch(uri);
    const posts = await res.json();
    console.log(posts);
    let templateProjects = '';
    posts.forEach((post) => {
        templateProjects += `
            <tr>
                <td>${post.id}</td>
                <td><a href="details.html?id=${post.object}">${post.object}</td>
                <td>${post.project}</td>
                <td>${post.equipment}</td>
                <td>${post.adress}</td>
                <td>${post.contractor}</td>
                <td>${post.control_controller_manufacturer}</td>
                <td>${post.manufacturer_dispatcher_controller}</td>
                <td>${post.SCADA}</td>
                <td>${post.control}</td>
                <td>${post.dispatcher}</td>
            </tr>
        `;
    });
    projectsEl.innerHTML = templateProjects;
};

window.addEventListener('DOMContentLoaded', () => renderPostsCT());
window.addEventListener('DOMContentLoaded', () => renderPostsRT());
window.addEventListener('DOMContentLoaded', () => renderPostsProjects());
