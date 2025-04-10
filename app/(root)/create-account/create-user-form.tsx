'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { UploadButton } from '@/lib/uploadthing';
import image from '@/public/full-logo.png';
import { toast } from 'sonner';
import { updateProfileSchema } from '@/lib/validators';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const CreateUserForm = () => {
  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof updateProfileSchema>> = async (
    data
  ) => {
    console.log(data);
  };

  return (
    <form method="Post" onSubmit={form.handleSubmit(onSubmit)}>
      {' '}
      <div className="flex flex-col gap-4">
        <div>
          <Image src={image} alt="Logo" width={200} height={200} className="" />
        </div>

        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res: { url: string }[]) => {
            form.setValue('imageUrl', res[0].url);
          }}
          onUploadError={(error: Error) => {
            toast.error('Error Uploading Image' + error.message);
          }}
        />
        <p className="textCyan text-center">Display Name</p>
        <Input {...form.register('displayName')} />

        <div className="flex flex-row justify-end my-4">
          <Button
            variant="outline"
            className=" text-white rounded-lg p-2 mt-4 mr-2"
          >
            Skip
          </Button>
          <Button type="submit" className="rounded-lg p-2 mt-4 mr-2">
            Submit
          </Button>
        </div>
        <p className="text-white">You can update these later.</p>
      </div>
    </form>
  );
};

export default CreateUserForm;
