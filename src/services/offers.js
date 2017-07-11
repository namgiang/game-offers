const OfferService = (offers) => {
	this.offers = offers;
}

OfferService.prototype.getSummary = () => {
	let summary = {
		productName: "",
		averagePrice: null
	}

	if (this.offers.length > 0) {
		const languages = this.offers[0].product.languages;
	  summary.productName = languages.title || languages[0].title || "";
	  summary.averagePrice = averagePrice(this.offers);
	}
	
	return summary;
}


averagePrice = (offers) => {
	const avg = offers.reduce((sum, offer) => sum += offer.price, 0) / this.offers.length; 
	return +avg.toFixed(2); 
}


export default OfferService;