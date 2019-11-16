import * as Yup from "yup";

/* NEWS CONTROLLER FILE */
import News from "../models/News";
import User from "../models/User";

/* List All SolarPanels */

class NewsController {

    /* Create a News */
    async store(req, res) {
        const schema = Yup.object().shape({
            title: Yup.string(),
            description: Yup.string()
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error: "Error Input Validation!"
            });
        }

        const {
            title,
            description
        } = await News.create(req.body);
        return res.json({
            title,
            description,
        });
    }

    /* Create  News */
    async show(req, res) {
        const news = await News.findAll();
        res.json({
            news
        });
    }

    /* Delete News */
    async update(req, res) {
        const {
            newsId,
            title,
            description
        } = req.body;
        const news = await News.findByPk({
            where: {
                newsId
            }
        });

        if (title == news.title && description == news.description) {
            return res.status(400).json({
                message: "Nothing to update!"
            });
        }

        const {
            title,
            description
        } = await news.update(req.body);
        return res.json({
            title,
            description
        });
    }

    /* Delete News */
    async delete(req, res) {
        const {
            newsId
        } = req.body;
        const news = await News.findOne({
            where: {
                newsId
            }
        });

        if (!news) {
            return res.status(401).json({
                error: "Cant be deleted fake news "
            });
        } else {
            return News.destroy({
                    where: {
                        newsId
                    }
                }) ?
                res.json("News deleted!") :
                res.status(401).json({
                    error: "News couldnt be deleted!"
                });
        }
    }
}

export default new NewsController();