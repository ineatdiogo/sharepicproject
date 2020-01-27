<template>
    <div id="content">
        <div class="discovery_header_wrapper">
            <div class="discovery_header">
                <h1>What's popular today</h1>
                <p>See recently added photos with the highest Pulse.</p>
            </div>
        </div>
        <div class="tab_navigation_wrapper">
            <ul class="tabs">
                <li class="active">
                    <a href="/">populaire</a>
                </li>
                <li>
                    <a href="/">à venir</a>
                </li>
                <li>
                    <a href="/">nouveautés</a>
                </li>
                <li>
                    <a href="/">editors' choice</a>
                </li>
                <li>
                    <a href="/">galeries</a>
                </li>
            </ul>
        </div>
        <div class="discovery_body_wrapper">
            <div class="discovery_body">
                <div class="discovery_body_grid">
                    <ul>
                        <li class="photo_thumbnail">
                            <a href="">
                                <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg" alt="A Toyota Previa covered in graffiti" loading="lazy">
                            </a>
                        </li>
                        <li class="photo_thumbnail">
                            <a href="">
                                <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg" alt="Interesting living room light through a window" loading="lazy">
                            </a>
                        </li>
                        <li class="photo_thumbnail">
                            <a href="">
                                <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg" alt="Sara on a red bike" loading="lazy">
                            </a>
                        </li>
                        <li class="photo_thumbnail">
                            <a href="">
                                <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg" alt="XOXO venue in between talks" loading="lazy">
                            </a>
                        </li>
                        <li class="photo_thumbnail">
                            <a href="">
                                <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg" alt="Trees lit by green light during dusk" loading="lazy">
                            </a>
                        </li>
                        <li class="photo_thumbnail">
                            <a href="">
                                <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05586_oj8jfo.jpg" alt="Portrait of Justin Pervorse" loading="lazy">
                            </a>
                        </li>
                      </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
}
</script>

<style scoped>

/*
    Discovery Header Style
*/
.discovery_header_wrapper {
    display: flex;
    height: 115px;
    padding: 0 60px;
    background-color: #fff;
}

.discovery_header h1 {
    font-size: 36px;
    font-weight: 600;
    color: #222;
    margin: 32px 0 10px 0;
}

.discovery_header p {
    font-size: 18px;
    line-height: 1.4em;
    color: #525558;
}

/*
    Discovery Tab Style
*/
.tab_navigation_wrapper {
    position: relative;
    transform: translateZ(0);
    border-bottom: 1px solid #eeeff2;
}

.tab_navigation_wrapper .tabs {
    background-color: #fff;
    list-style-type: none;
    text-align: left;
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 50px;
}

.tab_navigation_wrapper .tabs > li {
    display: inline;
    margin: 0 10px;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: bold;
    list-style: none;
}

.tab_navigation_wrapper .tabs > li > a {
    font-size: 14px;
    display: inline-block;
    padding: 15px 0;
    border-bottom: 2px solid transparent;
    color: #71767a;
    cursor: pointer;
    text-decoration: none;
    outline: none;
}

.tab_navigation_wrapper .tabs > li.active > a {
    color: #0099e5;
    border-bottom: 2px solid #0099e5;
}

/*
    Discovery Body Style
*/
.discovery_body_wrapper {
    background-color: #f7f8fa;
    padding: 20px 50px;
}

.discovery_body {
    display: flex;
    flex-wrap: wrap;
}

.photo_thumbnail {
    height: 40vh;
    flex-grow: 1;
    opacity: 1;
    background-color: #eeeff2;
}

.photo_thumbnail:last-child {
    flex-grow: 10;
}

.photo_thumbnail img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
}
  

.discovery_body_grid ul {
  display: flex;
  flex-wrap: wrap;
}

.discovery_body_grid ul > li {
  margin: 5px;
  height: 40vh;
  flex-grow: 1;
}

.discovery_body_grid ul > li:last-child {
  flex-grow: 10;
}

.discovery_body_grid li > a > img {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}
</style>