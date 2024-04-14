<template>
    <div class="d-flex flex-row justify-content-center p-3 mb-3 banner-container">
        <div class="title-container me-3">
        <h1>Feature's Details</h1>
        </div>
        <div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item list-color">ID</li>
                <li class="list-group-item list-color">Magnitude</li>
                <li class="list-group-item list-color">Place</li>
                <li class="list-group-item list-color">Time</li>
                <li class="list-group-item list-color">Tsunami</li>
                <li class="list-group-item list-color">Type of magnitude</li>
                <li class="list-group-item list-color">Title</li>
                <li class="list-group-item list-color">Longitude</li>
                <li class="list-group-item list-color">Latitude</li>
                <li class="list-group-item list-color">Url</li>
            </ul>
        </div>
        <div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item list-color">{{ data.id }}</li>
                <li class="list-group-item list-color">{{ data.attributes.place }}</li>
                <li class="list-group-item list-color">{{ data.attributes.magnitude }}</li>
                <li class="list-group-item list-color">{{ data.attributes.time }}</li>
                <li class="list-group-item list-color">{{ data.attributes.tsunami }}</li>
                <li class="list-group-item list-color">{{ data.attributes.mag_type }}</li>
                <li class="list-group-item list-color">{{ data.attributes.title }}</li>
                <li class="list-group-item list-color">{{ data.attributes.coordinates.longitude }}</li>
                <li class="list-group-item list-color">{{ data.attributes.coordinates.latitude }}</li>
                <li class="list-group-item list-color">{{ data.links.external_url }}</li>
            </ul>
        </div>
    </div>
</template> 

<script>
export default {
    props: {
        data: {
            Object
        }
    }
}
</script>

<style scoped>
.banner-container {
    width: 100%;
    /* padding: 1rem; */
    background: linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%);
}
.title-container {
    align-content: center;
    color: white;
    /* background: linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%); */
}
.list-color {
    background-color: transparent;
    color: white;
}
</style>