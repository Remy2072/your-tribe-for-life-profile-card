<script>
    export let data;

    function checkAvatarImage(avatar) {
        if (avatar.includes("https")) {
            return true;
        }

        return false;
    }
</script>

<main>
    <section class="container">
        {#each data.persons as person}
            <div class="card">
                <div class="card-inner">
                    <div class="front">
                        <h2>{person.name + " " + person.surname}</h2>
                        <p>Web Developer, A'DAM</p>
                        <button>hover me</button>
                    </div>
                    <div class="back">
                        <h1>{person.name + " " + person.surname}</h1>
                        <p>{person.bio}</p>
                        <div class="row">
                            <div class="col">
                                <h2>❌ ❌ ❌</h2>
                                <p>Amsterdam</p>
                            </div>
                            <div class="col">
                                <h2>2️⃣ 1️⃣</h2>
                                <p>Leeftijd</p>
                            </div>
                            <div class="col">
                                <h2>💪🏼</h2>
                                <p>Sportschool</p>
                            </div>
                        </div>
                        <div class="row">
                            <button>{person.nickname}</button>
                            <a href={person.website} target="_blank"
                                ><img
                                    src="src/lib/img/globe.png"
                                    alt="web logo"
                                /></a
                            >
                            <a href={person.github_handle} target="_blank"
                                ><img
                                    src="src/lib/img/github.png"
                                    alt="github logo"
                                /></a
                            >
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </section>
</main>

<style>
    .container {
        width: 100%;
        height: 100vh;
        background: var(--gradient1);
        padding: 10px;
    }

    .card {
        width: 21.875rem;
        height: 32.188rem;
        margin: 12.5rem auto 0;
        cursor: pointer;
    }

    .card-inner {
        width: 100%;
        height: 100%;
        position: relative;
        transition: transform 1s;
        transform-style: preserve-3d;
    }

    .card:hover .card-inner {
        transform: rotateY(180deg);
    }

    .front,
    .back {
        width: 100%;
        height: 100%;
        border-radius: 15px;
        position: absolute;
        backface-visibility: hidden;
    }

    .front {
        background: url(../lib/img/70781820.jpeg);
        background-size: cover;
        background-position: center;
        padding: 3.75rem var(--medium-rem);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: var(--color-white);
    }

    .front h2 {
        font-weight: 500;
    }

    .front p {
        color: var(--color-lightgray);
        font-size: 13px;
    }

    .front button {
        width: 7.5rem;
        border: 1px solid var(--color-white);
        background: transparent;
        border-radius: 3.125rem;
        padding: 8px var(--small-rem);
        cursor: pointer;
        margin-top: var(--small-rem);
        color: var(--color-white);
    }

    .back {
        background: var(--gradient2);
        color: var(--color-white);
        padding: var(--small-rem) var(--medium-rem);
        transform: rotateY(180deg);
    }

    .back h1 {
      margin-top: 2.2rem;
        font-size: 3.125rem;
        line-height: 3.438rem;
        margin-bottom: 1.875rem;
    }

    .back p {
        font-size: 14px;
    }

    .back button {
        background: var(--color-pink);
        color: var(--color-black);
        border: 0;
        outline: 0;
        padding: 8px 1.563rem;
        border-radius: 1.875rem;
        font-size: 14px;
        margin: 15px;
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }

    .back button:hover {
        background: var(--gradient3);
    }

    .back a {
        background: var(--color-pink);
        width: var(--medium-rem);
        height: var(--medium-rem);
        border-radius: 50%;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 5px;
    }

    .back a:hover {
        background: var(--gradient3);
    }

    .back img {
        width: 70%;
    }

    .row {
        display: flex;
        align-items: center;
        margin-top: 1.875rem;
    }

    .col {
        flex: 1;
        text-align: center;
        color: var(--color-white);
        font-size: 12px;
        position: relative;
    }

    .col h2 {
        font-size: var(--small-rem);
    }

    .col p {
        margin-top: 5px;
    }

    .col::after {
        content: "";
        width: 1.5px;
        height: var(--small-rem);
        background: var(--color-black);
        position: absolute;
        top: 5px;
        right: 0px;
    }

    .col:last-child::after {
        display: none;
    }
</style>
