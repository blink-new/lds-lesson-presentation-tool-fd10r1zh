import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, ImageIcon, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
  notes?: string;
  duration?: string;
  type: 'title' | 'content' | 'discussion' | 'closing';
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Personal Preparation to Meet the Savior",
    type: 'title',
    content: (
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-light text-white tracking-tight leading-tight">
          Personal Preparation to Meet the Savior
        </h1>
        <div className="text-xl text-white/90 space-y-3">
          <p className="italic font-medium">Elder Dale G. Renlund</p>
          <p>Of the Quorum of the Twelve Apostles</p>
          <p>April 2025 General Conference</p>
        </div>
        <Badge variant="secondary" className="text-lg px-8 py-3 bg-white/20 text-white border-white/30 font-medium">
          Elders Quorum Lesson
        </Badge>
        <div className="mt-10 mx-auto w-80 h-48 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
          <div className="text-center text-white/70 space-y-2">
            <ImageIcon className="w-12 h-12 mx-auto" />
            <p className="text-sm">Image of the Savior or Temple</p>
            <p className="text-xs opacity-70">Available from ChurchofJesusChrist.org</p>
          </div>
        </div>
      </div>
    ),
    notes: "Keep this slide up during the opening prayer and introduction.",
    duration: "5 min"
  },
  {
    id: 2,
    title: "Opening: Joyful Optimism",
    type: 'content',
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-light text-white text-center mb-12">Opening: Joyful Optimism</h2>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-5xl mx-auto">
          <p className="text-2xl text-white leading-relaxed">
            "Now is the time for you and for me to prepare for the Second Coming of our Lord and Savior, Jesus the Christ."
          </p>
          <p className="text-lg text-white/80 mt-4 italic">— President Russell M. Nelson</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-5xl mx-auto">
          <p className="text-2xl text-white leading-relaxed">
            "When President Nelson speaks about the Second Coming, it is always with joyful optimism."
          </p>
          <p className="text-lg text-white/80 mt-4 italic">— Elder Dale G. Renlund</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30 max-w-4xl mx-auto">
          <p className="text-lg text-white font-medium">
            <strong>Opening Question:</strong> How can we cultivate a sense of joyful optimism about the Second Coming?
          </p>
        </div>
      </div>
    ),
    notes: "Set the tone with President Nelson's optimistic approach. Allow brief discussion (3-4 minutes).",
    duration: "4 min"
  },
  {
    id: 3,
    title: "The Savior's Clear Instructions",
    type: 'content',
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-light text-white text-center mb-12">The Savior's Clear Instructions</h2>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-5xl mx-auto">
          <p className="text-2xl text-white leading-relaxed">
            "The best advice for her, for you, and for me is to follow the Savior's teachings. His instructions are neither mysterious nor complex. When we follow them, we do not need to fear or be anxious."
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-5xl mx-auto">
          <p className="text-2xl text-white leading-relaxed">
            "Jesus Christ was asked when He would come again. In answering, He taught three parables, recorded in Matthew 25, about how to prepare to meet Him—whether at His Second Coming or whenever we leave this world."
          </p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30 max-w-4xl mx-auto">
          <p className="text-lg text-white">
            <strong>The Three Parables:</strong> Ten Virgins • Talents • Sheep and Goats
          </p>
        </div>
      </div>
    ),
    notes: "Emphasize that the Savior's instructions are clear and accessible. Preview the three parables.",
    duration: "3 min"
  },
  {
    id: 4,
    title: "Parable of the Ten Virgins: Accept the Gospel",
    type: 'discussion',
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-light text-white text-center mb-10">Parable of the Ten Virgins</h2>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-5xl mx-auto">
          <p className="text-xl text-white leading-relaxed mb-6">
            "For they that are wise and have received the truth, and have taken the Holy Spirit for their guide, and have not been deceived—verily I say unto you, they shall … abide the day."
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            "We are wise when we accept the gospel, seek to have the Holy Ghost with us, and avoid deception. The five wise virgins could not help those without oil; no one can accept the gospel, take the Holy Ghost as a guide, and avoid deception on our behalf. We have to do this for ourselves."
          </p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30 max-w-4xl mx-auto">
          <p className="text-lg text-white font-medium">
            <strong>Discussion:</strong> What are some "drops" of oil that we can add to our spiritual lamps daily?
          </p>
        </div>
      </div>
    ),
    notes: "Focus on personal preparation through gospel acceptance, Holy Ghost guidance, and avoiding deception.",
    duration: "5 min"
  },
  {
    id: 5,
    title: "Avoiding Deception Through Truth",
    type: 'discussion',
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-light text-white text-center mb-10">Avoiding Deception</h2>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-5xl mx-auto">
          <p className="text-xl text-white leading-relaxed mb-6">
            "Take heed that no man deceive you. For many shall come in my name, saying, I am Christ; and shall deceive many."
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            "The Book of Mormon teaches us how we can differentiate deceivers from disciples. Disciples always promote believing in God, serving Him, and doing good. We will not be deceived when we seek and take counsel from trusted individuals who are themselves faithful disciples of the Savior."
          </p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30 max-w-4xl mx-auto">
          <p className="text-lg text-white font-medium">
            <strong>Discussion:</strong> How can we discern between true and false guidance in today's world?
          </p>
        </div>
      </div>
    ),
    notes: "Emphasize the importance of seeking counsel from faithful disciples and regular temple worship.",
    duration: "5 min"
  },
  {
    id: 6,
    title: "Parable of the Talents: Magnify Your Abilities",
    type: 'discussion',
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-light text-white text-center mb-10">Parable of the Talents</h2>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-5xl mx-auto">
          <p className="text-xl text-white leading-relaxed mb-6">
            "God expects us to magnify the abilities we have been given, but He does not want us to compare our abilities to those of others."
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            "With His loving assistance, He expects us to become the best version of ourselves. That we may start with differing abilities is irrelevant to Him. And it should be to us."
          </p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30 max-w-4xl mx-auto">
          <p className="text-lg text-white font-medium">
            <strong>Discussion:</strong> How can we identify and magnify our unique talents without comparing ourselves to others?
          </p>
        </div>
      </div>
    ),
    notes: "Share the story of Zusya if time permits. Focus on personal growth and divine potential.",
    duration: "5 min"
  },
  {
    id: 7,
    title: "Parable of the Sheep and Goats: Serve Others",
    type: 'discussion',
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-light text-white text-center mb-10">Parable of the Sheep and Goats</h2>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-5xl mx-auto">
          <p className="text-xl text-white leading-relaxed mb-6">
            "Verily I say unto you, Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me."
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            "When we serve others, we serve God; when we don't, we disappoint. He expects us to use our gifts, talents, and abilities to bless the lives of Heavenly Father's children."
          </p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30 max-w-4xl mx-auto">
          <p className="text-lg text-white font-medium">
            <strong>Discussion:</strong> How does serving others prepare us to meet the Savior?
          </p>
        </div>
      </div>
    ),
    notes: "Share the story of Farmer Paavo if time permits. Focus on service to the vulnerable.",
    duration: "5 min"
  },
  {
    id: 8,
    title: "Trust in the Holy Ghost and Faithful Disciples",
    type: 'discussion',
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-light text-white text-center mb-10">Trust and Guidance</h2>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-5xl mx-auto">
          <p className="text-xl text-white leading-relaxed mb-6">
            "Follow Jesus Christ and trust the Holy Ghost as you would a cherished friend. Rely on those who love you and who love the Savior."
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            "Seek God's guidance to develop your unique abilities, and help others, even when it isn't easy. You will be ready to meet the Savior, and you can join President Nelson in being joyfully optimistic."
          </p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30 max-w-4xl mx-auto">
          <p className="text-lg text-white font-medium">
            <strong>Discussion:</strong> How can we strengthen our relationship with the Holy Ghost?
          </p>
        </div>
      </div>
    ),
    notes: "Emphasize the importance of trusted relationships and divine guidance.",
    duration: "4 min"
  },
  {
    id: 9,
    title: "Closing: Joyful Preparation",
    type: 'closing',
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-light text-white text-center mb-12">Closing: Joyful Preparation</h2>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-5xl mx-auto">
          <p className="text-2xl text-white leading-relaxed text-center">
            "You will be ready to meet the Savior, and you can join President Nelson in being joyfully optimistic. In doing so, you help the world prepare for the Second Coming of Jesus Christ."
          </p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border border-white/30 max-w-4xl mx-auto">
          <p className="text-xl text-white font-medium text-center">
            <strong>Personal Challenge:</strong> Choose one specific action this week to better prepare for the Savior's return
          </p>
          <div className="mt-6 text-white/90 text-center space-y-2">
            <p>• Daily personal scripture study</p>
            <p>• Serve someone in need</p>
            <p>• Develop a God-given talent</p>
            <p>• Seek guidance from the Holy Ghost</p>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 max-w-4xl mx-auto">
          <p className="text-lg text-white italic text-center">
            "Rejoice! And prepare for that day! ... When our beloved Savior comes again."
          </p>
        </div>
      </div>
    ),
    notes: "Invite testimonies and commitments. Close with prayer.",
    duration: "3 min"
  }
];

export default function LessonPresentation() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSlide = slides[currentSlideIndex];
  const progress = ((currentSlideIndex + 1) / slides.length) * 100;

  const goToNextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToPreviousSlide();
      } else if (event.key === 'Escape') {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  const slideBackgroundClass = 'bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700';

  return (
    <div className={`min-h-screen ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Header */}
      {!isFullscreen && (
        <div className="bg-white shadow-sm border-b p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-slate-800">Personal Preparation to Meet the Savior</h1>
              <Badge variant="outline" className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>Elders Quorum</span>
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <Clock className="w-4 h-4" />
                <span>{currentSlide.duration}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFullscreen(true)}
              >
                <Play className="w-4 h-4 mr-2" />
                Present
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex h-full">
        {/* Sidebar - Only show when not fullscreen */}
        {!isFullscreen && (
          <div className="w-80 bg-slate-50 border-r overflow-y-auto">
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Progress</span>
                  <span>{currentSlideIndex + 1} of {slides.length}</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              
              <div className="space-y-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      index === currentSlideIndex 
                        ? 'bg-blue-100 border-2 border-blue-300' 
                        : 'hover:bg-slate-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-slate-500">
                        {slide.id}
                      </span>
                      <span className="text-sm font-medium text-slate-700 truncate">
                        {slide.title}
                      </span>
                    </div>
                    {slide.duration && (
                      <div className="text-xs text-slate-500 mt-1">
                        {slide.duration}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Slide Content */}
        <div className="flex-1 relative">
          <div className={`${slideBackgroundClass} min-h-screen flex flex-col items-center justify-center p-8`}>
            {/* Slide Number */}
            <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white">
              {currentSlideIndex + 1} / {slides.length}
            </div>

            {/* Slide Content */}
            <div className="w-full max-w-6xl mx-auto">
              {currentSlide.content}
            </div>

            {/* Notes - Only show when not fullscreen */}
            {!isFullscreen && currentSlide.notes && (
              <div className="absolute bottom-6 left-6 max-w-sm">
                <Card className="bg-white/90 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-2">
                      <Volume2 className="w-4 h-4 text-slate-500 mt-1 flex-shrink-0" />
                      <p className="text-sm text-slate-600">{currentSlide.notes}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPreviousSlide}
              disabled={currentSlideIndex === 0}
              className="bg-white/90 backdrop-blur-sm border-white/50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlideIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNextSlide}
              disabled={currentSlideIndex === slides.length - 1}
              className="bg-white/90 backdrop-blur-sm border-white/50"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Fullscreen Exit */}
          {isFullscreen && (
            <div className="absolute top-6 left-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFullscreen(false)}
                className="bg-white/90 backdrop-blur-sm border-white/50"
              >
                <Pause className="w-4 h-4 mr-2" />
                Exit Presentation
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}