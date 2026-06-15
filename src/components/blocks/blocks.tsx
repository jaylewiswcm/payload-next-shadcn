/*
Render all blocks components from payload 
*/

import React, { Fragment } from 'react'
import { Page, Scooter } from '@/payload-types'
// import Hero from './hero'
import Cta from './cta'
import Faq from './faq' 
import Features from './features'
import GridCards from './grid-cards'
import Logos from './logos'
import Quote from './quote'
import RichTextBlock from './rich-text'
// Shadcn
import { Hero231 } from '../shadcn/blocks/hero231'
import { ExploreProducts } from '../shadcn/blocks/ExploreProducts'
import { CoverBanner } from '../shadcn/blocks/CoverBanner'
import { FeatureColumns } from '../shadcn/blocks/FeatureColumns'
import { FeatureAccordions } from '../shadcn/blocks/FeatureAccordions'
import { KeyFeatures } from '../shadcn/blocks/KeyFeatures'
import { FeaturesGrid } from '../shadcn/blocks/FeaturesGrid'
import Intro from './intro'
import OverlayBanner from './overlayBanner'
import { CardGrid } from './content/CardGrid'
import { Specifications } from './product/Specifications'
import { ProductHero } from './hero/ProductHero'
import { CustomerPhotographs } from './trustpilot/CustomerPhotographs'
import { ReviewsCarousel } from './trustpilot/ReviewsCarousel'
import { ImageHotspots } from './product/ImageHotspots'


type Props = {
  blocks: Page['layout'] | Scooter['layout']
  product?: Scooter
}

const Blocks = ({ blocks, product}:Props) => {
  const blockComponents: any = {
    Hero: Hero231,
    Cta: Cta, 
    Faq: Faq,
    Features: Features,
    GridCards: GridCards,
    Logos: Logos,
    Quote: Quote,
    RichText: RichTextBlock,
    ExploreProducts: ExploreProducts,
    CoverBanner: CoverBanner,
    FeatureColumns: FeatureColumns,
    FeatureAccordion: FeatureAccordions,
    ProductHero: ProductHero,
    ProductIntro: Intro,
    KeyFeatures: KeyFeatures,
    FeaturesGrid: FeaturesGrid,
    OverlayBanner: OverlayBanner,
    CardGrid: CardGrid,
    SpecificationsBlock: Specifications,
    CustomerPhotographs: CustomerPhotographs,
    ReviewsCarousel: ReviewsCarousel,
    ImageHotspots: ImageHotspots
  }

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block) => {
          const { blockType } = block
          if (blockType) {
            const Block = blockComponents[blockType]
            if (Block) {
              return <Block {...block} key={block.id} product={product} />
            } else {
              console.log('Block type not supported')
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}

export default Blocks
