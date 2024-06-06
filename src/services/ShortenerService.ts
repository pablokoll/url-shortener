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
		return await ShortUrl.findOneAndUpdate(
			{ short: shortUrl },
			{ $inc: { clicks: 1 } },
			{ new: true },
		);
	}

	async seed(): Promise<void> {
		await ShortUrl.deleteMany();
		await ShortUrl.insertMany([
			{
				full: "https://pablokoll.com",
				short: "author",
			},
			{
				full: "https://github.com/pablokoll",
				short: "github",
			},
			{
				full: "https://gitlab.com/pablokoll",
				short: "gitlab",
			}
		]);
		console.log('Database are seeded');
	}
}

export default new ShortenerService();
