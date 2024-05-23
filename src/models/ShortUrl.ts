import { Schema, model } from 'mongoose'
import { nanoid } from 'nanoid'

export type ShortUrlType = {
	full: string
	short: string
	clicks: number
}

const shortUrlSchema = new Schema({
	full: {
		type: String,
		required: true
	},
	short: {
		type: String,
		required: true,
		default: () => nanoid(8)
	},
	clicks: {
		type: Number,
		required: true,
		default: 0
	}
})

const ShortUrl = model('ShortUrl', shortUrlSchema)
export default ShortUrl