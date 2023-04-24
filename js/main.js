

var currURL = "";
function loading() {
    $("#content").html(``);
    $("#content").html(`<div class="d-flex justify-content-center align-items-center text-center min-vh-100">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`);
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
var urls = [
    "https://public-api.wordpress.com/rest/v1.2/read/tags/art/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/photography/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/travel/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/summer/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/blogging/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/postaday/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/life/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/long-reads/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/books/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/entertainment/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/fashion/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/food/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/business/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/humor/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/culture/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/nature/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/family/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/crafts/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/longreads/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/funny/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/adventure/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/happiness/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/technology/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/business/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/poetry/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/writing/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/nature/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/science/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/motivation/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/inspiration/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/movies/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/bollywood/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/hollywood/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/relationships/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/dating/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/politics/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/life/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/love/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/history/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/india/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/women/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/social-issues/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/research/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/biology/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/haiku/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/comics/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/kids/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/finance/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/climate/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/climate-change/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/featured/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/music/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/diversity/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Innovation/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/entrepreneurs/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/startups/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/SaaS/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/story/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/story-telling/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/atheism/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/review/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/data/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/data-analytics/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/visualizations/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Faith/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Mindfulness/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/mystery/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/short-stories/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/macro/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/trending/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/viral/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/breaking-news/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/sci-fi/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/puns/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/gratitude/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/mental-health/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/meditation/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/language/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/environment/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Gardening/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/ted-talks/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/social/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/future/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/psychology/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/cinema/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/creative/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Illustration/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/videos/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/instagram/posts",  
    "https://public-api.wordpress.com/rest/v1.2/read/tags/TikTok/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Investing/posts",  
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Small-Business/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/jokes/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/games/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/education/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/apple/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/android/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/netflix/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/aws/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/marketing/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/market/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/latest/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/architecture/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/ideas/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Puzzles/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/quotes/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/leadership/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/media/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/reading/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/birds/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Youtube/posts",  
    "https://public-api.wordpress.com/rest/v1.2/read/tags/inspirational/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/wildlife/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/in-depth/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Beautiful/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Weddings/posts",  
    "https://public-api.wordpress.com/rest/v1.2/read/tags/thoughts/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/City/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Digital/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/community/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/cybersecurity/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/romance/posts",  
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Letters/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Myth/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/tax/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/NASA/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/astrophysics/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/medicine/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Hulu/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/HBO/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/twitter/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/facebook/posts",  
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Flowers/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/tourism/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/creativity/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/DIY/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Light/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/beach/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/time/posts",  
    "https://public-api.wordpress.com/rest/v1.2/read/tags/painting/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/drawing/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/sketch/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Horror/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/podcasts/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Memes/posts",
    "https://public-api.wordpress.com/rest/v1.2/read/tags/graphic-novel/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/hope/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/SUCCESS/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/positivity/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/style/posts",  
    "https://public-api.wordpress.com/rest/v1.2/read/tags/holiday/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/journal/posts",  
    "https://public-api.wordpress.com/rest/v1.2/read/tags/health/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/abstract/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/lifestyle/posts",  
    "https://public-api.wordpress.com/rest/v1.2/read/tags/exercise/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/vacation/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/actress/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/amazing/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/astronomy/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/programming/posts",  
    "https://public-api.wordpress.com/rest/v1.2/read/tags/vlog/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/crime/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/reddit/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/london/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/excel/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/analytics/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/design/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/privacy/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/linkedin/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/productivity/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/space/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/statistics/posts",  
    "https://public-api.wordpress.com/rest/v1.2/read/tags/maths/posts",  
    "https://public-api.wordpress.com/rest/v1.2/read/tags/running/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/physics/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Engineering/posts",    
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Beautiful/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/Portrait/posts",  
    "https://public-api.wordpress.com/rest/v1.2/read/tags/interesting/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/non-fiction/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/self-help/posts",   
    "https://public-api.wordpress.com/rest/v1.2/read/tags/lifestyle/posts",  
    "https://public-api.wordpress.com/rest/v1.2/read/tags/storytelling/posts",

]
surpriseMe();
$(".mybutton").on("click", function (e) {
    surpriseMe()
})

function surpriseMe() {
    console.clear();
    loading();
    var url = urls[Math.floor(Math.random() *  urls.length)]
    // console.log(url);
    //can implement after and before and paginations to get more results
    fetch(`${url}/?number=5&http_envelope=1&order=desc&fields=URL,author,featured_image,tags,title,content,site_name,date`)
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                if (data.body) {
                    if (data.body.posts) {
                        if (data.body.posts.length >= 1) {
                            if (data.body.posts[0]) {
                                // console.log(data);
                                var postNum = 0;
                                postNum = randomIntFromInterval(0, data.body.posts.length - 1)
                                // console.log(postNum)
                                // console.log(data.body.posts[postNum])
                                v = data.body.posts[postNum]
                                var { hostname } = new URL(v.URL);
                                let authorname = v.author ? `${v.author.name} | ` : ``
                                let featuredimage = v.featured_image ? `<img src="${v.featured_image}" alt="" style="max-width:100%" />` : ``
                                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                                var html = "";
                                if (v.tags) {
                                    Object.keys(v.tags).forEach(k => {
                                        html += `<span class="badge bg-secondary me-2" style="cursor:pointer">${v.tags[k].name}</span>`;
                                    }
                                    );
                                }
                                var $listItem = $(`${html}`);
                                $listItem.on("click", function (e) {
                                    e.preventDefault();
                                    onTagClick(`https://public-api.wordpress.com/rest/v1.2/read/tags/${e.currentTarget.innerText.replaceAll(" ", "-")}/posts`)
                                });
                                $("#content").html(`<img src="https://icon.horse/icon/${hostname}" class="rounded ms-1 me-2 d-inline-block align-text-top" style="height:32px;width:32px" /><a href="https://${hostname}" class="" target="_blank"><span class="small">${v.site_name}</span></a>`);
                                $("#content").append(`<h1 class="mt-2 mb-2">${v.title}<span class="ms-2"><a href="${v.URL}" class="" target="_blank" title="${v.title}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-up-right fw-bold" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                              </svg></a></span></h1>`)
                                $("#content").append(`<p class="mt-2 ms-1 small">${authorname} ${(new Date(v.date)).toLocaleDateString("en-IN", options)}</p>`)
                                $("#content").append($listItem);
                                $("#content").append(`<hr>`)
                                if (!v.content.includes("<img") && !v.content.includes("<fig")) {
                                    $("#content").append(`${featuredimage}`);                                    
                                }
                                $("#content").append(`${v.content}`)
                                window.scrollTo(0, 0);
                                // currURL="";
                                // currURL = $("#content").html();
                                // console.log(currURL)

                            } else {
                                surpriseMe();
                            }
                        } else {
                            surpriseMe();
                        }
                    } else {
                        surpriseMe();
                    }
                }
                else {
                    surpriseMe();
                }
            }
            else {
                surpriseMe();
            }

        })
}

function onTagClick(url) {    
    loading();
    fetch(`${url}/?number=20&http_envelope=1&order=desc&fields=URL,author,featured_image,tags,title,content,site_name,date`)
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                if (data.body) {
                    if (data.body.posts) {
                        if (data.body.posts.length >= 1) {
                            if (data.body.posts[0]) {
                                // console.log(data);
                                var postNum = 0;
                                postNum = randomIntFromInterval(0, data.body.posts.length - 1)
                                console.log(postNum)
                                // console.log(data.body.posts[postNum])
                                v = data.body.posts[postNum]
                                var { hostname } = new URL(v.URL);
                                let authorname = v.author ? `${v.author.name} | ` : ``
                                let featuredimage = v.featured_image ? `<img src="${v.featured_image}" alt="" style="max-width:100%" />` : ``
                                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                                var html = "";
                                if (v.tags) {
                                    Object.keys(v.tags).forEach(k => {
                                        html += `<span class="badge bg-secondary me-2" style="cursor:pointer" data-tag="${v.tags[k].slug}">${v.tags[k].name}</span>`;
                                    }
                                    );
                                }
                                var $listItem = $(`${html}`);
                                $listItem.on("click", function (e) {
                                    e.preventDefault();
                                    onTagClick(`https://public-api.wordpress.com/rest/v1.2/read/tags/${e.currentTarget.innerText.replaceAll(" ", "-")}/posts`)
                                });
                                $("#content").html(`<img src="https://icon.horse/icon/${hostname}" class="rounded ms-1 me-2 d-inline-block align-text-top" style="height:32px;width:32px" /><a href="https://${hostname}" class="" target="_blank"><span class="small">${v.site_name}</span></a>`);
                                $("#content").append(`<h1 class="mt-2 mb-2">${v.title}<span class="ms-2"><a href="${v.URL}" class="" target="_blank" title="${v.title}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                </svg></a></span></h1>`)
                                $("#content").append(`<p class="mt-2 ms-1 small">${authorname} ${(new Date(v.date)).toLocaleDateString("en-IN", options)}</p>`)
                                $("#content").append($listItem);
                                $("#content").append(`<hr>`)
                                if (!v.content.includes("<img") && !v.content.includes("<fig")) {
                                    $("#content").append(`${featuredimage}`);
                                    console.log(`${featuredimage}`);
                                }
                                $("#content").append(`${v.content}`)

                            } else {
                                surpriseMe();
                            }
                        } else {
                            surpriseMe();
                        }
                    } else {
                        surpriseMe();
                    }
                }
                else {
                    surpriseMe();
                }
            }
            else {
                surpriseMe();
            }

        })
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

document.addEventListener('touchstart', function (event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
});

document.addEventListener('touchend', function (event) {
    touchEndX = event.changedTouches[0].clientX;
    touchEndY = event.changedTouches[0].clientY;

    // calculate swipe direction
    let deltaX = touchEndX - touchStartX;
    let deltaY = touchEndY - touchStartY;

    // check which direction has greater distance and use that as the swipe direction
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            console.log('swipe right');
            // surpriseMe();
            console.log(currURL);
            $("#content").html(currURL);
            
        } else {
            console.log('swipe left');
            surpriseMe();           
        }
    } 
});









