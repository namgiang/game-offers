const OfferService = (offers) => {
	this.offers = offers;
}

OfferService.prototype.getSummary = () => {
	let summary = {
		image: "",
		productName: "",
		averagePrice: null
	}

	if (this.offers.length > 0) {
		const product = this.offers[0].product;
		summary.image = product.details.image || "";
	  summary.productName = product.languages.title || product.languages[0].title || "";
	  summary.averagePrice = averagePrice(this.offers);
	}
	
	return summary;
}

OfferService.prototype.getMinPrice = () => {
	let min = 0;
	const offers = this.offers;
	if (offers.length > 0) {
		min = Math.floor(offers.reduce((min, offer) => min = offer.price < min ? offer.price : min, offers[0].price));
	}
	return min;
}

OfferService.prototype.getMaxPrice = () => {
	return Math.ceil(this.offers.reduce((max, offer) => max = offer.price > max ? offer.price : max, 0)) || 20;
}

OfferService.prototype.filterByPriceRange = (range) => {
	return this.offers.filter(offer => offer.price >= range[0] && offer.price <= range[1]);
}

OfferService.prototype.sortByPrice = (order, offers) => {
	if (order === "noOrder") return offers;
	return offers.sort((a, b) => {
		if (!a || !b) return offers;
		return sort(a.price, b.price, order);
	});	
}

sort = (priceA, priceB, order) => {
	let prev = priceA;
  let next = priceB;
  if (order === 'highToLow') {
    prev = priceB;
    next = priceA;
  }
  if (prev < next) {
    return -1;
  }
  if (prev > next) {
    return 1;
  }

  if (prev === undefined) {
    return -1;
  }
  return 0;
}

averagePrice = (offers) => {
	const avg = offers.reduce((sum, offer) => sum += offer.price, 0) / this.offers.length; 
	return +avg.toFixed(2); 
}


export default OfferService;