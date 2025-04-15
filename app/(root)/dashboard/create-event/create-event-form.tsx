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
import image from '@/public/images/stock.jpg';
import Image from 'next/image';

const CreateEventForm = ({
  friends,
}: {
  friends: z.infer<typeof friendSchema>[];
}) => {
  const form = useForm<z.infer<typeof insertEventSchema>>({
    resolver: zodResolver(insertEventSchema),
    defaultValues: {
      id: crypto.randomUUID(), // Generate a unique ID
      guests: [], // Default to an empty array
      location: '', // Default to an empty string
    },
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
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          console.log('Validation errors:', errors); // Debugging log
        })}
      >
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Input
            placeholder="Event Name"
            {...form.register('name')}
            className="w-full"
            defaultValue=""
          />
          {/* Date */}
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
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Type (eg. Birthday, Holiday)"
            {...form.register('type')}
            className="w-full"
          />
          <Input
            placeholder="Location"
            {...form.register('location')}
            className="w-full"
          />
          {/* Visibility */}
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
        </div>

        <Input
          placeholder="Description"
          {...form.register('description')}
          className="w-full"
        />

        <div className="mt-8 border-t-2 border-cyan-300">
          <h3 className="text-lg font-medium text-center mt-4">
            Invite Friends
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 p-8">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="backgroundCyan rounded-2xl shadow-2xl p-2 flex flex-col space-y-2"
              >
                <Image src={image} alt="logo" height={20} width={20} />

                <label
                  htmlFor={`friend-${friend.id}`}
                  className="text-md text-center"
                >
                  {friend.displayName || friend.name || 'Unnamed Friend'}
                </label>
                <input
                  type="checkbox"
                  id={`friend-${friend.id}`}
                  checked={form.watch('guests')?.includes(friend.id) || false}
                  onChange={() => toggleGuest(friend.id)}
                />
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
