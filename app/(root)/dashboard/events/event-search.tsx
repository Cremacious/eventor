'use client';

import { Event } from '@/lib/types';
import EventTimeline from '@/components/shared/events/event-timeline';
import { useState } from 'react';

const EventSearch = ({
  events,
  currentUserId,
}: {
  events: Event[];
  currentUserId: string;
}) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [visibilityFilter, setVisibilityFilter] = useState<
    'all' | 'user' | 'friends'
  >('all');
  const [sortOrder, setSortOrder] = useState<'ascending' | 'descending'>(
    'ascending'
  );

  const filteredEvents = events
    .filter((event) => {
      // Filter by keyword (name, type, location)
      const keyword = searchKeyword.toLowerCase();
      return (
        event.name.toLowerCase().includes(keyword) ||
        event.type.toLowerCase().includes(keyword) ||
        (event.location?.toLowerCase() ?? '').includes(keyword)
      );
    })
    .filter((event) => {
      // Filter by visibility
      if (visibilityFilter === 'user') {
        return event.id === currentUserId;
      }
      if (visibilityFilter === 'friends') {
        return event.id !== currentUserId;
      }
      return true;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'ascending'
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search events by name, type, or location"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <div className="flex gap-4">
        <select
          value={visibilityFilter}
          onChange={(e) =>
            setVisibilityFilter(e.target.value as 'all' | 'user' | 'friends')
          }
          className="p-2 border rounded-md backgroundGray "
        >
          <option value="all">All Events</option>
          <option value="user">My Events</option>
          <option value="friends">Friends' Events</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(e.target.value as 'ascending' | 'descending')
          }
          className="p-2 border rounded-md backgroundGray"
        >
          <option value="ascending">Ascending Dates</option>
          <option value="descending">Descending Dates</option>
        </select>
      </div>
      <EventTimeline events={filteredEvents} />
    </div>
  );
};

export default EventSearch;
