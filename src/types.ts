import React from 'react';

export enum SlideType {
  INTRO = 'INTRO',
  SECTION_HEADER = 'SECTION_HEADER',
  INSTRUCTION = 'INSTRUCTION',
  WARNING = 'WARNING',
  CTA = 'CTA',
  COMPARISON_TABLE = 'COMPARISON_TABLE',
  TILED_GRID = 'TILED_GRID',
  SPLIT_HIGHLIGHT = 'SPLIT_HIGHLIGHT'
}

export interface ComparisonRow {
  feature: string;
  val1: string | boolean;
  val2: string | boolean;
}

export interface GridTile {
  icon: string;
  title: string;
  description: string;
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string | React.ReactNode;
  // DÜZELTME: subtitle artık özel renkli yazı (ReactNode) olabilir
  subtitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
  highlightCode?: boolean;
  backgroundColor?: 'light' | 'dark' | 'yellow';
  browserUrl?: string;
  hideOverlay?: boolean;
  imageFit?: 'contain' | 'cover';
  imagePosition?: 'top' | 'center' | 'bottom' | 'left' | 'right';
  svgOverlayContent?: React.ReactNode;
  comparisonData?: {
    col1Title: string;
    col2Title: string;
    rows: ComparisonRow[];
  };
  gridTiles?: GridTile[];
  highlightNumber?: string;
}

export interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  goToSlide: (index: number) => void;
}