'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
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
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { createEvent } from '@/lib/actions/event.actions';
import flaskImage from '@/public/images/icons/flask-bubble.png';
import { format } from 'date-fns';
import { insertEventSchema } from '@/lib/validators';
import { toast } from 'sonner';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const QuickCreateForm = () => {
  const [open, setOpen] = useState(false);
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
      setOpen(false);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="backgroundCyan w-full justify-center text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear">
          Quick Create Event
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex justify-center">
            <Image
              src={flaskImage}
              alt="Flask"
              width={100}
              height={100}
              className="mb-4"
            />
          </div>
          <AlertDialogTitle className="text-center">
            Let&apos;s create a new event!
          </AlertDialogTitle>
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

            <Select
              onValueChange={(value) => form.setValue('visibility', value)}
            >
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
                    form.watch('date')
                      ? new Date(form.watch('date'))
                      : undefined
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
            <Button variant="destructive" type="submit">
              Create Event
            </Button>
          </form>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default QuickCreateForm;
