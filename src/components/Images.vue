<template>
    <div class="image_block">
        <div class="image_wrapper">
            <img src="" alt="image.alt" />
        </div>
        <div class="image_infos">
            <div class="pulse">9.0</div>
            <a class="link"></a>
            <div class="infos">
                <div class="author">
                    <div class="avatar">
                        <img src=""/>
                    </div>
                    <span class="author_name">Firstname Lastname</span>
                </div>
                <div class="actions">
                    <svg class="icon" version="1.1" viewBox="-6.9 -13.1 40 40" x="0px" y="0px">
                        <path class="shape" clip-rule="evenodd" fill-rule="evenodd" d="M20.7-7.2c-5.8,0-7.6,4.3-7.6,4.3l0,0c0,0-1.8-4.3-7.6-4.3s-8.4,3.7-8.4,8.1c0,2.2,1.8,5.2,3.6,7.3
                            C2.5,10.3,13.1,20.6,13.1,21l0,0c0-0.4,10.6-10.7,12.4-12.7c1.8-2,3.6-5,3.6-7.3C29.1-3.4,26.4-7.2,20.7-7.2z"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase'

const db = firebase.firestore()

export default {
    name: 'Images',

    dataStore() {
        return {
            pictures: db.collection('pictures')
        }
    }
}
</script>

<style scoped>
    .image_block {
    display: inline;
    .image_wrapper {
        display: inline;
        position: relative;
    
        img {
            max-height: 100%;
            min-width: 100%;
            object-fit: cover;
            vertical-align: bottom;
        }
    }
    &:hover {
        .image_infos {
            display: flex;
        }
    }
    
    .image_infos {
        display: none;
        position: absolute;
        z-index: 9;
        top: 0;
        left: 0;
        width: 100%;
        height: 40vh;
        flex-direction: column;
        transition: all linear 300ms;
    
        .pulse {
            width: 100%;
            height: 6vh;
            text-align: right;
            color: #fff;
            font-size: 1.2rem;
            padding: 0.625rem;
            box-sizing: border-box;
            background: linear-gradient(
                to bottom,
                black,
                transparent
                );
        }
    
        .link {
            display: block;
            height: 28vh;
        }
    
        .infos {
            height: 6vh;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0.625rem;
            box-sizing: border-box;
            background: linear-gradient(
                to top,
                black,
                transparent
                );
    
            .author {
                display: flex;
                flex-direction: row;
                align-items: center;
                color: #fff;
    
                .avatar {
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    justify-content: center;
                    width: 26px;
                    height: 26px;
                    border-radius: 13px;
                    margin-right: 16px;
    
                    img {
                        width: 26px;
                        height: 26px;
                        border-radius: 13px;
                    }
                }
            }
            
            .actions {
                display: flex;
                flex-direction: row;
                align-items: center;
    
                .icon {
                    height: 26px;
                    fill: rgba($color: #fff, $alpha: .0);
                    stroke: rgba($color: #fff, $alpha: 1.0);
                    stroke-width: 2px;
                    transition: all linear 300ms;
                    cursor: pointer;
    
                    &:hover {
                        fill: rgba($color: #fff, $alpha: .8);
                    }
    
                    &.liked {
                        fill: rgba($color: #fff, $alpha: 1.0);
                    }
                }
            }
        }
    
    }
}

</style>