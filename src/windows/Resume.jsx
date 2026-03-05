import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import { Download } from 'lucide-react';
import React from 'react'
import { useState } from "react";

import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
).toString();

const Resume = () => {

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div id='window-header'>
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a href="files/resume.pdf" download className='cursor-pointer' title='Download resume'>
            <Download className='icon'/>
        </a>
      </div>

      <div className="overflow-y-auto h-[500px] p-4">
        <Document
          file="files/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(
            new Array(numPages),
            (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer
                renderAnnotationLayer
              />
            )
          )}
        </Document>
      </div>
    </>
  )
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
