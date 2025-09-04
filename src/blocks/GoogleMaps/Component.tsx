'use client'

import { GoogleMapsBlock as GoogleMapsBlockProps, Media } from '@/payload-types'
import { AdvancedMarker, APIProvider, Map, InfoWindow } from '@vis.gl/react-google-maps'
import { useState } from 'react'
import Image from '@/components/PayloadImage'

export function GoogleMapsBlock({ zoom, places }: GoogleMapsBlockProps) {
  const zoomLevel = zoom || 15
  const defaultCenter = {
    lat: places?.[0]?.latitude || 34.052235,
    lng: places?.[0]?.longitude || -118.243683,
  }
  const [selectedPlace, setSelectedPlace] = useState<
    | {
        name: string
        address: string
        latitude: number
        longitude: number
        image?: number | Media | null | undefined
        id?: string | null
      }
    | undefined
  >(undefined)

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API || ''}>
            <Map
              defaultCenter={defaultCenter}
              defaultZoom={zoomLevel}
              style={{ width: '100%', height: '100%' }}
              mapId="google-maps-block"
            >
              {places?.map((place, index) => (
                <AdvancedMarker
                  key={index}
                  position={{
                    lat: place.latitude,
                    lng: place.longitude,
                  }}
                  onClick={() => {
                    place === selectedPlace ? setSelectedPlace(undefined) : setSelectedPlace(place)
                  }}
                />
              ))}
              {selectedPlace && (
                <InfoWindow
                  position={{
                    lat: selectedPlace.latitude,
                    lng: selectedPlace.longitude,
                  }}
                  onCloseClick={() => {
                    setSelectedPlace(undefined)
                  }}
                >
                  <div className="p-2">
                    <h3 className="font-semibold text-lg mb-1">{selectedPlace.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{selectedPlace.address}</p>
                    {selectedPlace.image && (
                      <Image
                        media={selectedPlace.image}
                        alt={selectedPlace.name}
                        width="200"
                        height="200"
                      />
                    )}
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        </div>
      </div>
    </section>
  )
}
