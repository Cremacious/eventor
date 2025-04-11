'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { UploadButton } from '@/lib/uploadthing';
import image from '@/public/full-logo.png';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';
import { updateDisplayName } from '@/lib/actions/user.actions';
import { updateDisplayNameSchema } from '@/lib/validators';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const DisplayNameForm = () => {
  const form = useForm<z.infer<typeof updateDisplayNameSchema>>({
    resolver: zodResolver(updateDisplayNameSchema),
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof updateDisplayNameSchema>
  > = async (data) => {
    const response = await updateDisplayName(data);
    if (response.success) {
      form.reset();
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <>
      {' '}
      <form method="Post" onSubmit={form.handleSubmit(onSubmit)}>
        {' '}
        <div className="flex flex-col gap-4">
          <div>
            <Image
              src={image}
              alt="Logo"
              width={200}
              height={200}
              className=""
            />
          </div>

          {/* <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res: { url: string }[]) => {
              form.setValue('imageUrl', res[0].url);
            }}
            onUploadError={(error: Error) => {
              toast.error('Error Uploading Image' + error.message);
            }}
          /> */}
          <p className="textCyan text-center">Display Name</p>
          <Input {...form.register('displayName')} />

          <div className="flex flex-row justify-end my-4">
            <Button type="submit" className="rounded-lg p-2 mt-4 mr-2">
              Submit
            </Button>
          </div>
          <p className="text-white">You can update these later.</p>
        </div>
      </form>
    </>
  );
};

export default DisplayNameForm;
