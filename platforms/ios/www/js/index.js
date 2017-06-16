/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    alert("Capture Video");
    // capture callback
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            var video_tag = document.getElementById('vid');
            video_tag.src = path;
            video_tag.load();
            
        }
    };
    
    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
    
    document.getElementById('captureVideo').addEventListener("touchend", captureVideo,false);
    function captureVideo(){
        alert('opening camera');
        navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});
    }
    
    document.getElementById('urlvideo').addEventListener("touchend", changeSrc,false);
    
}

function changeSrc(){
    alert('rendering server video');
    var video_tag = document.getElementById('vid');
    video_tag.src = "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4";
    video_tag.load();
    
}
