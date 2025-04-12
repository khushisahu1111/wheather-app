"use client"

import { useState } from "react"
import SearchBar from "./components/search-bar"
import WeatherCard from "./components/weather-card"
import ErrorMessage from "./components/error-message"
import LoadingSpinner from "./components/loading-spinner"
import "./App.css"

interface WeatherData {
  city: string
  country: string
  temperature: number
  description: string
  icon: string
  humidity: number
  windSpeed: number
  feelsLike: number
}

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem("weatherSearchHistory")
    return saved ? JSON.parse(saved) : []
  })

  const handleSearch = async (city: string) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`http://localhost:5000/api/weather?city=${encodeURIComponent(city)}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch weather data")
      }

      setWeatherData(data)

      // Update search history
      if (!searchHistory.includes(city)) {
        const updatedHistory = [city, ...searchHistory].slice(0, 5)
        setSearchHistory(updatedHistory)
        localStorage.setItem("weatherSearchHistory", JSON.stringify(updatedHistory))
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Weather Dashboard</h1>
          <p className="text-gray-600">Get real-time weather information for any city</p>
        </header>

        <div className="mb-8">
          <SearchBar onSearch={handleSearch} isLoading={loading} />

          {searchHistory.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {searchHistory.map((city) => (
                <button
                  key={city}
                  onClick={() => handleSearch(city)}
                  className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors border border-gray-200"
                >
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>

        {loading && <LoadingSpinner />}

        {error && <ErrorMessage message={error} />}

        {weatherData && !loading && <WeatherCard data={weatherData} />}

        {!weatherData && !loading && !error && (
          <div className="text-center text-gray-500 mt-12">
            <p>Enter a city name to get the current weather</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
