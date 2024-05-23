import type { Request, Response } from "express";
import ShortenerService from "../services/ShortenerService";

class ShortenerController {
	async getAllShortUrls(req: Request, res: Response): Promise<void> {
		const shortUrls = await ShortenerService.getAllShortUrls();
		res.render("index", { shortUrls: shortUrls });
	}

	async getShortUrl(req: Request, res: Response): Promise<void> {
		const shortUrl = await ShortenerService.getShortUrl(req.params.shortid);
		if (!shortUrl) res.sendStatus(404);
		await ShortenerService.incrementClicks(shortUrl.short);
		res.redirect(shortUrl.full);
	}

	async createShortUrl(req: Request, res: Response): Promise<void> {
		if (!req.body.fullUrl) res.sendStatus(400);
		const exists = await ShortenerService.getShortUrlByFull(req.body.fullUrl);
		if (!exists) {
			await ShortenerService.createShortUrl(req.body.fullUrl);
		} else {
            await ShortenerService.incrementClicks(exists.short);
		}
		res.redirect("/");
	}
}

export default new ShortenerController();
