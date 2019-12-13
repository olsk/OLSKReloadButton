<script>
import OLSKInternational from 'OLSKInternational';
const OLSKLocalized = function(translationConstant) {
	return OLSKInternational.OLSKInternationalLocalizedString(translationConstant, JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`)[window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage')]);
};

import _OLSKSharedReload from '../OLSKUIAssets/_OLSKSharedReload.svg';
</script>

<button on:click={ () => window.location.reload() } class="OLSKReloadButton OLSKToolbarButton OLSKLayoutElementTappable OLSKLayoutButtonNoStyle" title={ OLSKLocalized('OLSKReloadButtonText') }>
	<div class="OLSKReloadButtonImage">{@html _OLSKSharedReload }</div>
</button>
