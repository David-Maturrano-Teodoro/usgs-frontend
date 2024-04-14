<template>
    <div class="banner-container">
        <div class="banner-container-items">
            <img :src="url_logo" alt="usgs_logo.png">
            <p class="text-subtitle">Find recent or historic earthquakes, lists, information
                on selected significant earthquakes, earthquake resources
                by state, or find webservices.</p>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        url_logo: "https://www.usgs.gov/themes/custom/usgs_tantalum/usgs_logo.png"
    })
}
</script>

<style scoped>

.banner-container {
    width: 100%;
    height: 20rem;
    padding: 1rem;
    background: linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%);
}

.banner-container-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 40%;
    height: inherit;
    margin: 0 auto;
}

.text-subtitle {
        color: white;
        text-align: center;
        font-size: 1.15rem;
}

a {
        color: #41B883;
        font-weight: bold;
        text-decoration: none;
        background-color: #34495E;
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid #41B883;
        cursor: pointer;
}
img {
    width: 250px;
    height: 100px;
}
</style>