<template>
    <div class="upload_modal_wrapper">
        <div class="upload_modal">
            <div class="upload_modal_title">
                Upload new image
            </div>
            <form method="post">
                <div class="upload_modal_content">
                    <div class="input_wrapper">
                        <label for="name">Picture's name</label>
                        <input id="name" type="text" />
                    </div>
                    <div class="input_wrapper">
                        <label for="name">Picture's description</label>
                        <textarea id="description" rows="8"></textarea>
                    </div>
                    <div class="input_wrapper">
                        <label for="name">Picture's file</label>
                        <input id="name" type="file" />
                    </div>
                    <div class="actions">
                        <input class="button" type="submit" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>


export default {
    name: "Upload",
    methods: {
        toggle: () => {
            let upload = document.querySelector('.upload_modal_wrapper');
            upload.classList.display = "none";
        }
    }
}
</script>

<style scoped>
/*
    Upload Modal Style
*/
.upload_modal_wrapper {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -9999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.upload_modal_wrapper .upload_modal {
    width: 450px;
    height: 550px;
    background: #f7f8fa;
    position: relative;
}

.upload_modal_wrapper .upload_modal_title {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    text-transform: uppercase;
    padding: 20px;
    background: #fff;
}

.upload_modal_wrapper .upload_modal_content {
    padding: 20px;
    box-sizing: border-box;
}

.upload_modal_wrapper .upload_modal_content .input_wrapper {
    padding: 20;
    margin-bottom: 20px;
}

.upload_modal_wrapper .upload_modal_content .input_wrapper label {
    display: inline-block;
    margin-bottom: .5rem;
}

.upload_modal_wrapper .upload_modal_content .input_wrapper input, .upload_modal_wrapper .upload_modal_content .input_wrapper textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #efefef;
    background-clip: padding-box;
    border: none;
    border-radius: .25rem;
    outline: none;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

::-webkit-file-upload-button {
    background: #dedede;
    border-radius: 10px;
    color: #666;
    box-shadow: none;
    outline: none;
    padding: 8px;
}

.upload_modal_wrapper .upload_modal_content .actions {
    position: absolute;
    box-sizing: border-box;
    bottom: 10px;
    left: 0;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.upload_modal_wrapper .upload_modal_content .actions .button {
    cursor: pointer;
    width: 153px;
    height: 48px;
    line-height: 48px;
    background: #0870d1;
    border-radius: 28px;
    font-size: 16px;
    font-family: Arial,Helvetica,sans-serif;
    text-align: center;
    color: #fff;
    font-weight: 700;
}

.upload_modal_wrapper .upload_modal_content .actions .button {
    background: #2986f7;
}

</style>