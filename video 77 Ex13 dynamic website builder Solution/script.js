function createCard(title, cName, views, monthsOld, duration,thumbnail )
{

    let viewStr
    if(views>999 && views<1000000)
    {
        viewStr = views/1000 + 'k';
    }
    else if(views>1000)
    {
        viewStr = views/1000000 + 'M'
    }
    else
    {
        viewStr = views;
    }

    let html = `<div class="container">
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">
                    ${duration}
                </div>
            </div>

            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>
    </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML +html
}

createCard("Installing lorem Development Course - Tutorial #1", "codewithharry", 560000, 2, "20:00", "https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDVLIUfmrskNAha1yNa-7ygsEeNEA")
createCard("sigma web dev tut#3", "codewithharry", 560000, 2, "20:00", "https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDVLIUfmrskNAha1yNa-7ygsEeNEA")


createCard("sigma web dev tut#3", "codewithharry", 56000000, 2, "20:00", "https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDVLIUfmrskNAha1yNa-7ygsEeNEA")