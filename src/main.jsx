import React from 'react'
import ReactDOM from 'react-dom/client'
import GeneralInfoSection from './components/GeneralInfo'
import EducationSection from './components/Education'
import ExperienceSection from './components/Experience'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralInfoSection />
    <EducationSection />
    <ExperienceSection />
  </React.StrictMode>,
)
