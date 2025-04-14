'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { createEvent } from '@/lib/actions/event.actions';
import { format } from 'date-fns';
import { friendSchema } from '@/lib/validators';
import { insertEventSchema } from '@/lib/validators';
import { toast } from 'sonner';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const CreateEventForm = ({
  friends,
}: {
  friends: z.infer<typeof friendSchema>[];
}) => {
  const form = useForm<z.infer<typeof insertEventSchema>>({
    resolver: zodResolver(insertEventSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof insertEventSchema>> = async (
    data
  ) => {
    console.log(data);
    const response = await createEvent(data);
    if (response.success) {
      form.reset();
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  const toggleGuest = (friendId: string) => {
    const currentGuests = form.getValues('guests') || [];
    if (currentGuests.includes(friendId)) {
      form.setValue(
        'guests',
        currentGuests.filter((id) => id !== friendId)
      );
    } else {
      form.setValue('guests', [...currentGuests, friendId]);
    }
  };

  return (
    <>
      <form
        className="space-y-4"
        method="Post"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Input
          placeholder="Event Name"
          {...form.register('name')}
          className="w-full"
          defaultValue=""
        />
        <Input
          placeholder="Description"
          {...form.register('description')}
          className="w-full"
        />
        <Input
          placeholder="Type"
          {...form.register('type')}
          className="w-full"
        />
        <Input
          placeholder="Location"
          {...form.register('location')}
          className="w-full"
        />

        <Select onValueChange={(value) => form.setValue('visibility', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Visibility" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="private">Private (Default)</SelectItem>
            <SelectItem value="public">Public</SelectItem>
            <SelectItem value="friends-only">Friends Only</SelectItem>
          </SelectContent>
        </Select>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-[280px] justify-start text-left font-normal',
                !form.watch('date') && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {form.watch('date') ? (
                form.watch('date')
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 pointer-events-auto">
            <Calendar
              mode="single"
              selected={
                form.watch('date') ? new Date(form.watch('date')) : undefined
              }
              onSelect={(selectedDate) => {
                if (selectedDate) {
                  const formattedDate = format(selectedDate, 'MM-dd-yyyy');
                  form.setValue('date', formattedDate);
                }
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <div>
          <h3 className="text-lg font-medium">Invite Friends</h3>
          <div className="space-y-2">
            {friends.map((friend) => (
              <div key={friend.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`friend-${friend.id}`}
                  checked={form.watch('guests')?.includes(friend.id) || false}
                  onChange={() => toggleGuest(friend.id)}
                />
                <label htmlFor={`friend-${friend.id}`} className="text-sm">
                  {friend.displayName || friend.name || 'Unnamed Friend'}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Button type="submit">Create Event</Button>
      </form>
    </>
  );
};

export default CreateEventForm;
