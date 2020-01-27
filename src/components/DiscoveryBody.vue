<template>
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
</template>

<script>
export default {
    name: "DiscoveryBody",
}
</script>

<style scoped>

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