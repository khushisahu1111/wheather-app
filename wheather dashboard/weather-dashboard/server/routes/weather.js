const express = require("express")
const axios = require("axios")
const router = express.Router()

// Get weather data for a city
router.get("/", async (req, res) => {
  try {
    const { city } = req.query

    if (!city) {
      return res.status(400).json({ message: "City parameter is required" })
    }

    const API_KEY = process.env.OPENWEATHER_API_KEY

    if (!API_KEY) {
      return res.status(500).json({ message: "API key not configured" })
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    )

    const weatherData = {
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
    }

    res.json(weatherData)
  } catch (error) {
    console.error("Error fetching weather data:", error.response?.data || error.message)

    if (error.response && error.response.status === 404) {
      return res.status(404).json({ message: "City not found" })
    }

    res.status(500).json({ message: "Failed to fetch weather data" })
  }
})

module.exports = router
