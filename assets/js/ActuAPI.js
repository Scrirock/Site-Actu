/**
 * API to have the news
 */
const axios = require('axios');
const params = {
    access_key: '2cfef2156ca663aef6e79c31e0d05045',
    languages: 'fr,-en',
    countries: 'be,fr',
    limit: 20,
    sort: 'published_desc',
}

axios.get('http://api.mediastack.com/v1/news', {params})
    .then(response => {
        function addLorem(text){
            text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus libero eu mollis egestas. Sed vel justo in augue imperdiet sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam diam massa, malesuada eu finibus sed, sodales vel enim. Donec lacinia odio eget orci dignissim, malesuada consectetur turpis ornare. Vivamus ut est ut felis porta facilisis eget et libero. Aenean non justo sit amet lacus tempus iaculis egestas eget quam. Sed ut convallis augue. Curabitur sollicitudin enim malesuada turpis posuere tincidunt. Ut fermentum nec metus ut rutrum. Suspendisse erat est, ornare in feugiat viverra, maximus non mi.\n" +
                "\n" +
                "Nullam ex dui, laoreet sed dui id, consequat euismod sapien. Morbi nec eros eu dolor posuere eleifend. Aliquam hendrerit metus vel lectus ultrices scelerisque. Nam nec felis et justo mattis facilisis. Maecenas fringilla urna quam, ut efficitur enim blandit at. Nam varius arcu sapien, consectetur efficitur lectus porta ut. Cras in vestibulum velit. Etiam pharetra diam urna, non dictum augue condimentum nec. Curabitur sodales lorem interdum porta feugiat. Vivamus in ante sapien. Suspendisse potenti. Aenean non eleifend ante. Praesent rutrum mauris risus, eget placerat sem iaculis sit amet. Suspendisse dui sapien, ultrices at lectus quis, posuere auctor enim. Duis vitae nulla felis. Proin maximus lobortis posuere.\n" +
                "\n" +
                "Proin et diam a nibh varius placerat eu vehicula libero. Nam posuere ex et lorem iaculis, sit amet placerat erat rhoncus. Pellentesque arcu sapien, cursus sed risus eu, gravida congue sapien. Vivamus ultricies nulla neque, a scelerisque metus mollis sed. In sagittis metus sed euismod blandit. Maecenas rhoncus at dui eget lacinia. Mauris eget enim sit amet odio rhoncus ullamcorper. Aliquam mollis mi quis fringilla feugiat. Sed placerat ante sed magna scelerisque, congue finibus dui pharetra.\n" +
                "\n" +
                "Etiam eget aliquet mi. Mauris eu rutrum neque. Vestibulum a viverra velit. Nam convallis lectus est, sit amet pharetra dolor commodo eget. Donec scelerisque nulla at tortor luctus, quis tempus quam iaculis. Integer faucibus dolor non laoreet vulputate. Aliquam sed tellus nec metus mollis condimentum et tincidunt metus. Donec tempor arcu eget tortor placerat, nec viverra diam lobortis. Pellentesque at ante tortor. Quisque euismod egestas erat, at sollicitudin ligula convallis vitae. Suspendisse potenti. Suspendisse potenti. Quisque elementum ex nec lacus porttitor varius. Morbi et risus sed ante laoreet auctor. Integer rutrum ut nulla id convallis. Mauris sed quam erat.\n" +
                "\n" +
                "Vivamus elementum imperdiet quam sed semper. Suspendisse varius in arcu quis finibus. Nunc ac molestie ante. Mauris ipsum neque, malesuada elementum sapien non, facilisis tempor elit. Sed vitae ante ultrices, tempus turpis id, ullamcorper metus. Phasellus a ultricies justo, sed pretium magna. Fusce pretium velit justo, eget venenatis justo cursus non. Nam blandit nisl dui, eu condimentum lorem consequat nec. Nullam laoreet mi et elit tristique, at varius odio tincidunt. Aenean sagittis metus nec mi tincidunt, sit amet feugiat mi pulvinar. Aliquam erat volutpat. Vestibulum sollicitudin risus mollis libero convallis tristique a quis eros. Aliquam fringilla lorem id malesuada dapibus. Pellentesque aliquam quis leo quis laoreet."
        }

        const apiResponse = response.data.data;
        for (let i = 0; i < apiResponse.length; i++){
            let article = document.createElement("div");
            article.className = "article";
            document.body.append(article);

            let divText = document.createElement("div");
            divText.className = "divText";
            article.append(divText);

            let author = document.createElement("p");
            if(apiResponse[i].author){
                author.innerHTML = apiResponse[i].author;
            }
            else{
                author.innerHTML = "Anonymous";
            }
            author.className = "author";
            divText.append(author)

            let title = document.createElement("p");
            title.innerHTML = apiResponse[i].title;
            title.className = "titleArticle";
            divText.append(title)

            let description = document.createElement("div");
            description.innerHTML = apiResponse[i].description;
            description.className = "description";
            divText.append(description);

            let publishedAt = new Date(apiResponse[i].published_at);
            let formatDate = 'Le ' + publishedAt.getDate() + '/' + publishedAt.getMonth() + '/' + publishedAt.getFullYear() +
                                'à ' + publishedAt.getHours() + 'h' + publishedAt.getMinutes();

            let date = document.createElement("p");
            date.innerHTML = formatDate;
            date.className = "date";
            divText.append(date);

            let image = document.createElement("img");
            image.className = "imgArticle";
            if(apiResponse[i].image){
                image.src = apiResponse[i].image;
            }
            else{
                image.src = "build/images/noImage.jpg";
            }
            article.append(image);

            article.addEventListener("click", ()=>{
                let allArticle = document.querySelectorAll(".article")
                for (let i = 0; i < 20; i++){
                    if (allArticle[i] !== article){
                        allArticle[i].remove();
                        addLorem(description);
                    }
                }
            });
        }


    })
    .catch(error => {console.log(error);
    });