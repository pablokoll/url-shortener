import ShortUrl, { type ShortUrlType } from "../models/ShortUrl";

class ShortenerService {
	async getAllShortUrls(): Promise<ShortUrlType[]> {
		return await ShortUrl.find();
	}

	async getShortUrl(shortUrl: string): Promise<ShortUrlType> {
		return await ShortUrl.findOne({ short: shortUrl });
	}

	async getShortUrlByFull(fullUrl: string): Promise<ShortUrlType> {
		return await ShortUrl.findOne({ full: fullUrl });
	}

	async createShortUrl(fullUrl: string): Promise<ShortUrlType> {
		return await ShortUrl.create({ full: fullUrl });
	}

    async incrementClicks(shortUrl: string): Promise<ShortUrlType> {
        return await ShortUrl.findOneAndUpdate({ short: shortUrl }, { $inc: { clicks: 1 } }, { new: true });
    }
}

export default new ShortenerService()