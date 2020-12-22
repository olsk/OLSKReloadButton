<script>
import { OLSKLocalized } from 'OLSKInternational';

import _OLSKSharedReload from '../OLSKUIAssets/_OLSKSharedReload.svg';
</script>

<button on:click={ () => window.location.reload() } class="OLSKReloadButton OLSKToolbarButton OLSKDecorTappable OLSKDecorButtonNoStyle" title={ OLSKLocalized('OLSKReloadButtonText') }>
	<div class="OLSKReloadButtonImage">{@html _OLSKSharedReload }</div>
</button>
