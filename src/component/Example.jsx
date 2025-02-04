import React from 'react'
import { Card } from './Card'
import image from './image.jpg'

export const Example = () => {
    const handleProfile = () => {
        // profile
    }
    const handleFollow = () => {
        // follow
    }
  return (
    <section>
        <Card
            image = {image}
            title = "Mustafa Kemal"
            subTitle = "UX Engineer"
            description = "Selemalar amlamraıjasll ..."
            onProfile = {handleProfile}
            onFollow = {handleFollow}
        />
    </section>
  )
}
