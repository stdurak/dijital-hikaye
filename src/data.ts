export interface Chapter {
  id: string;
  chapterNumber: string;
  title: string;
  text: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  caption?: string;
}

export const bookData: Chapter[] = [
  {
    id: 'chapter-1',
    chapterNumber: 'CHAPTER I',
    title: 'Architects of the Shadows: Hydroids',
    text: 'Hydroids, a group comprising one of the 9,000 known species within the phylum Cnidaria, are organisms characterised by soft, flower-like branches and bodies that are mostly a dirty brown colour, appearing as though covered in dust or sand, with polyps at the tips of their branches that turn a bright white.',
    mediaType: 'image',
    mediaUrl: '/images/image1.jpg',
    caption: 'Hydroid colony with flower-like branches'
  },
  {
    id: 'chapter-2',
    chapterNumber: 'CHAPTER II',
    title: 'Colony Structure & Habitat',
    text: 'Hydroid colonies, which often inhabit the hard surfaces of caves and crevices that receive little light, or the surfaces beneath rocky outcrops, are found at a wide range of depths in the Mediterranean and Aegean Seas. With their shrub-like branches, they can reach sizes of up to 20 cm.',
    mediaType: 'image',
    mediaUrl: '/images/image2.jpg',
    caption: 'Detailed structure of hydroid polyps and branches'
  },
  {
    id: 'chapter-3',
    chapterNumber: 'CHAPTER III',
    title: 'The Micro Thieves Enter the Stage',
    text: 'Whilst hydroids feed on microscopic organisms and plankton in the water, some sea hares also feed on hydroid polyps. Hydroids known as Eudendrium live on dark substrates, whilst Campanularia live on the backs of shellfish.',
    mediaType: 'video',
    mediaUrl: '/videos/video1.mp4',
    caption: 'A nudibranch navigating its marine habitat'
  },
  {
    id: 'chapter-4',
    chapterNumber: 'CHAPTER IV',
    title: 'Shell-Less Molluscs of the Deep',
    text: 'Some hydroids are armed with venom to defend themselves against predators, but certain species of sea hares steal this venom from the hydroids and use it for their own defence. Known as ‘nudibranchs’ in English and ‘nacktschnecke’ in German, they are actually molluscs that lack a shell on their backs.',
    mediaType: 'image',
    mediaUrl: '/images/image3.jpg',
    caption: 'A shell-less nudibranch on the reef'
  },
  {
    id: 'chapter-5',
    chapterNumber: 'CHAPTER V',
    title: 'Diversity & Cannibalistic Survival',
    text: 'With lifespans as short as approximately one year, their sizes range from half a centimetre to 25 centimetres. Whilst some sea hares settle on hydroids, the spotted sea hare (Discodoris atromaculatus) lives on red sponges. There are at least 2,000 known species, and some are cannibalistic—eating their own kind to survive.',
    mediaType: 'image',
    mediaUrl: '/images/image4.jpg',
    caption: 'Vivid colors and patterns of a nudibranch'
  },
  {
    id: 'chapter-6',
    chapterNumber: 'CHAPTER VI',
    title: 'Rabbit Ears & Hermaphroditic Marvels',
    text: 'The tentacles that give sea hares their English name are likened to rabbit ears in Turkish, hence the name ‘sea hare’. Among their fascinating characteristics are their ability to see in black and white and the fact that they are hermaphrodites, possessing both male and female reproductive organs simultaneously.',
    mediaType: 'image',
    mediaUrl: '/images/image5.jpg',
    caption: 'Rhinophores resembling rabbit ears'
  },
  {
    id: 'chapter-7',
    chapterNumber: 'CHAPTER VII',
    title: 'A Nervous System Suited for Science',
    text: 'Do these colourful, thieving, tiny and cannibalistic creatures offer any benefit to humanity? Sea hares are creatures much loved by both divers and scientists alike, because the simple nervous systems of these tiny molluscs are perfectly suited to modelling the complex human nervous system.',
    mediaType: 'image',
    mediaUrl: '/images/image6.jpg',
    caption: 'Anatomy and movement of a sea hare'
  },
  {
    id: 'chapter-8',
    chapterNumber: 'CHAPTER VIII',
    title: 'From Stolen Venom to Nobel Glory',
    text: 'Dr Eric Kandel and his colleagues studied how signals are transmitted in the sea hare’s nervous system, developing a drug for Parkinson’s disease that earned them the Nobel Prize in 2000. These tiny "thieves" steal toxic secretions from hydroids, proving their monumental scientific value.',
    mediaType: 'image',
    mediaUrl: '/images/image7.jpg',
    caption: 'Sea hare defending itself with stolen weapons'
  }
];