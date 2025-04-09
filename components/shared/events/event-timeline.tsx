import { Building2, Calendar } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    name: "Kelly's Graduation",
    date: 'December 18th, 2024',
    description:
      'Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim',
    details: ['Friends Only', 'Location: Our House'],
  },
  {
    name: "Kelly's Graduation",
    date: 'December 18th, 2024',
    description:
      'Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim',
    details: ['Friends Only', 'Location: Our House'],
  },
  {
    name: "Kelly's Graduation",
    date: 'December 18th, 2024',
    description:
      'Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim',
    details: ['Friends Only', 'Location: Our House'],
  },
  {
    name: "Kelly's Graduation",
    date: 'December 18th, 2024',
    description:
      'Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim',
    details: ['Friends Only', 'Location: Our House'],
  },
];

const EventTimeline = () => {
  return (
    <>
      <div className="max-w-screen-sm mx-auto py-12 md:py-20 px-6">
        <div className="relative ml-3">
          {/* Timeline line */}
          <div className="absolute left-0 top-4 bottom-0 border-l-2" />
          {experiences.map(({ name, description, date, details }, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background" />
              {/* Content */}
              <div className="space-y-3 p-4 rounded-2xl bg-white animationEffect">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">{name}</h3>
                  <div className="flex items-center gap-2 mt-1 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{date}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {details.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventTimeline;
