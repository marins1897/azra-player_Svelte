<script>
	import { onMount, tick } from "svelte";
	import { songList } from "./songlist";

	let currentSongIndex = 0;
	let playerState = "play";
	let audioElement;
	let mainElement;

	let activeSongIndex = currentSongIndex;

	async function scrollToActiveSong() {
    await tick();
    	const activeSong = document.querySelector('.active-song');
    	if (activeSong) {
      		activeSong.scrollIntoView({
        		behavior: 'smooth',
        		block: 'center',
      		});
    	}
  	}


	function setBackground() {
		let background = `
			linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.5)),
			url(./files/image/${$songList[currentSongIndex].image}) center no-repeat
			`;
			mainElement.style.background = background;
			mainElement.style.backgroundSize = "cover";
	};

	onMount(() => {
		setBackground();

		audioElement.addEventListener('ended', () => {
        	next();
		});
	})

	function prev() {
		if (currentSongIndex === 0) {
			currentSongIndex = $songList.length -1 ;
		} else {
			currentSongIndex = (currentSongIndex - 1) % $songList.length;
		}

		playerState = "play";
		setBackground();
    	scrollToActiveSong();
	};

	function playPause() {
		if (playerState === "play") {
				playerState = "pause";
				audioElement.pause();
		} else {
				playerState = "play";
				audioElement.play();
		}
	};

	function next() {
		currentSongIndex = (currentSongIndex + 1) % $songList.length;
		
		audioElement.src = `./files/audio/${$songList[currentSongIndex].audio}`;
    	audioElement.play();
		
		playerState = "play";
		setBackground();
    	scrollToActiveSong();
	};

	function setSong(i) {
		currentSongIndex = i;
		playerState = "play";
		setBackground();
    	scrollToActiveSong();
	};


</script>

<style>
	main {
		position: fixed;
		top : 0px;
		left : 0px;
		width : 100%;
		height : 100%;
	}

	audio {
		display: none;
	}

	.player {
		position: absolute;
		top : 50%;
		left : 50%;
		transform: translate(-50%,-50%);
		width : 386px;
		height: 436px;
		display: flex;
		flex-direction: column;
		border-radius: 20px;
		overflow: hidden;
	}

	.player .current-song {
		height : 120px;
		padding: 10px;
		display: flex;
		background: #eeeeeecc;
		z-index: 2;
	}

	.player .current-song .avatar {
		width: 100px;
		height: 100px;
		padding: 10px;
		text-align: center;
	}

	.player .current-song .avatar img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
	}

	.player .current-song .song-controls {
		padding-left: 10px;
		flex : 1;
	}

	.player .current-song .song-controls h2 {
		margin-bottom: 15px;
		font-size: 20px;
		color: goldenrod;
	}

	.player .current-song .song-controls .controls {
		display : 'flex';
		justify-content: space-between;
		padding-right: 40px;
	}

	.player .current-song .song-controls .controls button {
		outline: none;
		border: none;
		background: transparent;
		color: goldenrod;
		font-size: 20px;
		cursor: pointer;
	}

	.player .song-list {
		height: calc(100% -120px);
		background: #ffffff33;
		box-shadow: 0px 8px 32px rgba(32,38,135,0.2);
		backdrop-filter: blur(5px);
		border: 1px solid rgba(255,255,255,0.4);
		overflow-y: auto;
	}

	.player .song-list::-webkit-scrollbar {
		width: 4px;
		background: transparent;
	}

	.player .song-list::-webkit-scrollbar-thumb {
		width: 4px;
		background: #fff;
	}

	.player .song-list > div {
		display: flex;
		border-bottom: 1px solid rgba(255,255,255,0.25);
		cursor: pointer;
	}

	.player .song-list > div.active-song {
		background: rgba(255,255,255,0.25);
	}

	.player .song-list > div .avatar {
		width: 50px;
		height: 50px;
		text-align: center;
		padding: 16px;
	}

	.player .song-list > div .avatar img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
	}

	.player .song-list > div .song-details {
		padding : 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.player .song-list > div .song-details h2 {
		font-size: 16px;
		margin: 0px 0px 2px;
		color: #fff;
	}

	.player .song-list > div .song-details p {
		color: #eee;
		font-size: 15px;
		margin: 0px;
	}
</style>

<main bind:this={mainElement}>
	<audio 
		src={"./files/audio/"+$songList[currentSongIndex].audio}
		bind:this={audioElement}
		autoplay="false"
		>
	</audio>

	<div class="player">
		<div class="current-song">
			<div class="avatar">
				<img src={'./files/image/'+$songList[currentSongIndex].image} alt={$songList[currentSongIndex].name}>
			</div>

			<div class="song-controls">
				<h2>{$songList[currentSongIndex].name}</h2>

				<div class="controls">
					<button on:click={prev}>
						<i class="fa fa-backward" style="color:goldenrod"></i>
					</button>

					<button on:click={playPause}>
						{#if playerState === 'play'}
						<i class="fa fa-pause" style="color:goldenrod"></i>
						{:else}
						<i class="fa fa-play" style="color:goldenrod"></i>
						{/if}
					</button>

					<button on:click={next}>
						<i class="fa fa-forward" style="color:goldenrod"></i>
					</button>
				</div>
			</div>

		</div>

		<div class="song-list">
			{#each $songList as song, i}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="{i === currentSongIndex ? "active-song" : ""}"
					on:click={() => setSong(i)}
				>

				<div class="avatar">
					<img src="{'./files/image/'+song.image}" alt="{song.name}"/>
				</div>

				<div class="song-details">
					<h2>{song.name}</h2>
					<p>{song.album}</p>
				</div>

				</div>
			{/each}
		</div>
	</div>

</main>
