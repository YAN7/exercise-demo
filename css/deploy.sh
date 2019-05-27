fi#!/bin/bash

# -d ios or android 指定运行设备 默认 android
# --nobuild 不需要build

# the path of cordova project root
path=../allpay_management_new/WebRoot/modules/mobile
# path=../test

checkNoBuild()
{
	while [[ "$#" -ge 1 ]] ;
	do
	if [[ "$1" == "--nobuild" ]] ; then
		echo "yes"
		break
	fi
	shift 1
	done
}

checkDevice()
{
	while [[ "$#" -ge 1 ]] ;
	do
		if [[ "$1" == "-d" ]] ; then
			shift 1
			echo "$1"
			break
		fi
	shift 1
	done
}

if [[ `checkNoBuild $@` != "yes" ]] ; then
npm run build

# cp -R ./template ./dist/

# remove cordova www direction
rm -rf $path

# mv the build folder to cordova project, and rename the folder name
mv ./dist $path/

# add README.md
# touch $path/www/README.md
fi

# go to cordova direction and run the simulator
cd $path

# git add .
# git commit -m "$1"
# git pull origin master
# git push origin master

# cordova run device
# device=`checkDevice $@`
# if [[ "$device" == "" ]] ; then
# 	device="android"
# fi
# # cordova run ios
# # echo $device
# cordova run $device

# read input
