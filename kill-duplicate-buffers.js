interactive("kill-duplicate-buffers",
            "Kill buffers with duplicate urls so that there is only one buffer matching any url",
            function (I) {
                var urls = {};
                var deleted_buffers = 0;
                var deleted_buffers_matching_current = 0;
                var starting_buffer_url = I.window.buffers.current.display_uri_string;
                for_each_buffer(function (b) {
                        if (urls[b.display_uri_string]) {
                            if (b.display_uri_string === starting_buffer_url) {
                                deleted_buffers_matching_current++;
                            }
                            deleted_buffers++;
                            kill_buffer(b);
                        } else {
                            urls[b.display_uri_string] = true;
                        }});
                I.window.minibuffer.message("Deleted "+deleted_buffers+" buffers, with "+deleted_buffers_matching_current+" of them matching the current buffer");
            });

