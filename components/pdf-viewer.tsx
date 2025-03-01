"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw, Download, Maximize2, Minimize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface PDFViewerProps {
  url: string
  onClose: () => void
}

export function PDFViewer({ url, onClose }: PDFViewerProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(100)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [rotation, setRotation] = useState(0)
  const totalPages = 2 // Hardcoded for this example

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 25, 200))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 25, 50))
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360)
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = url
    link.download = "resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div
      className={`w-full max-w-5xl mx-auto rounded-lg border bg-background shadow-lg transition-all duration-300 ${
        isFullscreen ? "fixed mx-auto left-[calc(48px+5px)] right-[58px] bottom-0 top-[69px] rounded-none z-50" : ""
      }`}
      style={{
        maxWidth: isFullscreen ? "calc(100vw - 126px)" : "64rem", // Added 5px to each side (116px + 10px)
      }}
    >
      <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 border-b bg-background p-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="border-[1.5px] border-black dark:border-white"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="size-4" />
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            className="border-[1.5px] border-black dark:border-white"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="border-[1.5px] border-black dark:border-white"
            onClick={handleZoomOut}
            disabled={zoom <= 50}
          >
            <ZoomOut className="size-4" />
          </Button>
          <span className="text-sm w-16 text-center">{zoom}%</span>
          <Button
            variant="outline"
            size="icon"
            className="border-[1.5px] border-black dark:border-white"
            onClick={handleZoomIn}
            disabled={zoom >= 200}
          >
            <ZoomIn className="size-4" />
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <Button
            variant="outline"
            size="icon"
            className="border-[1.5px] border-black dark:border-white"
            onClick={handleRotate}
          >
            <RotateCw className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-[1.5px] border-black dark:border-white"
            onClick={handleDownload}
          >
            <Download className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-[1.5px] border-black dark:border-white"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <Button
            variant="outline"
            size="icon"
            className="border-[1.5px] border-black dark:border-white"
            onClick={onClose}
          >
            <X className="size-4" />
          </Button>
        </div>
      </div>
      <div
        className={`relative w-full overflow-auto bg-muted/20 p-4 ${
          isFullscreen ? "h-[calc(100%-4rem)]" : "h-[calc(100vh-16rem)]"
        }`}
      >
        <div
          className="mx-auto transition-all duration-200"
          style={{
            width: `${(8.5 * zoom) / 100}in`,
            height: `${(11 * zoom) / 100}in`,
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "center center",
          }}
        >
          <iframe
            src={`${url}#page=${currentPage}`}
            className="w-full h-full rounded border bg-white"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  )
}

