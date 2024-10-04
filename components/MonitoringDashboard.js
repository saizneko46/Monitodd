import { useState, useEffect } from 'react'
import axios from 'axios'

export default function MonitoringDashboard() {
  const [websites, setWebsites] = useState([])

  useEffect(() => {
    const fetchWebsites = async () => {
      const res = await axios.get('/api/websites')
      setWebsites(res.data.data)
    }
    fetchWebsites()
    const interval = setInterval(fetchWebsites, 300000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h1>Website Monitoring Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>Status</th>
            <th>Response Time</th>
            <th>Last Checked</th>
          </tr>
        </thead>
        <tbody>
          {websites.map((site) => (
            <tr key={site._id}>
              <td>{site.url}</td>
              <td>{site.status}</td>
              <td>{site.responseTime}ms</td>
              <td>{new Date(site.lastChecked).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
