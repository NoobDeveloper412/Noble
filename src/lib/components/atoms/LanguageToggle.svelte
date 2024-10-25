<script>
	import { language } from '../store/languageStore';

	function switchToEnglish() {
		language.set('en');
	}

	function switchToJapanese() {
		language.set('jp');
	}
</script>

<button on:click={switchToEnglish}>English</button>
<button on:click={switchToJapanese}>日本語</button>
