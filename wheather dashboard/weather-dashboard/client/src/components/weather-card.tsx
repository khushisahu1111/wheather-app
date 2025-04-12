import { Cloud, CloudRain, Droplets, Sun, Wind } from "lucide-react"

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

interface WeatherCardProps {
  data: WeatherData
}

export default function WeatherCard({ data }: WeatherCardProps) {
  const getWeatherIcon = () => {
    if (data.icon.includes("01")) return <Sun className="h-16 w-16 text-yellow-400" />
    if (data.icon.includes("02") || data.icon.includes("03") || data.icon.includes("04"))
      return <Cloud className="h-16 w-16 text-gray-400" />
    if (data.icon.includes("09") || data.icon.includes("10")) return <CloudRain className="h-16 w-16 text-blue-400" />
    return <Cloud className="h-16 w-16 text-gray-400" />
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">{data.city}</h2>
            <p className="text-blue-100">{data.country}</p>
          </div>
          <div className="text-right">
            <div className="text-5xl font-bold">{Math.round(data.temperature)}°C</div>
            <p className="capitalize text-blue-100">{data.description}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-center mb-6">{getWeatherIcon()}</div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Humidity</p>
              <p className="font-semibold">{data.humidity}%</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Wind className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Wind Speed</p>
              <p className="font-semibold">{data.windSpeed} m/s</p>
            </div>
          </div>

          <div className="flex items-center gap-2 col-span-2">
            <Sun className="h-5 w-5 text-orange-400" />
            <div>
              <p className="text-sm text-gray-500">Feels Like</p>
              <p className="font-semibold">{Math.round(data.feelsLike)}°C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
