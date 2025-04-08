import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { createEvent } from '@/lib/actions/event.actions';
import flaskImage from '@/public/images/icons/flask-bubble.png';
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
      setOpen(false);
      toast.success(response.message);
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
          {/* <AlertDialogDescription> */}
          <form
            className="space-y-4"
            method="Post"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <Input
              placeholder="Event Name"
              {...form.register('name')}
              className="w-full"
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
            {/* <Input
              placeholder="Visibility"
              {...form.register('visibility')}
              className="w-full"
            /> */}
            <Select
              onValueChange={(value) => form.setValue('visibility', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Visibility" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public (Default)</SelectItem>
                <SelectItem value="friends-only">Friends Only</SelectItem>
                <SelectItem value="private">Private</SelectItem>
              </SelectContent>
            </Select>

            <Input
              placeholder="Date"
              {...form.register('date')}
              className="w-full"
            />
            <Button variant="destructive" type="submit">
              Create Event
            </Button>
          </form>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
          {/* </AlertDialogDescription> */}
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default QuickCreateForm;
