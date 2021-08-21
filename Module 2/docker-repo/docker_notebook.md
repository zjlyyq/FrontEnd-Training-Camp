![](/images/Snipaste_2021-08-13_18-16-21.png)
# 安装docker引擎
Docker 引擎是docker容器的核心组件，Docker 引擎在mac和win10上通过Docker Desktop提供，在Linux上则通过Docker Server提供。

## Centos 安装 Docker Server
[参考资料](https://docs.docker.com/engine/install/centos/)
### 先决条件
#### 操作系统要求
+ 只支持CentOS 7 和 CentOS 8
+ 必须启用 `centos-extras` 储存库。默认情况下启用此存储库，但如果已禁用它，则需要重新启用它。
> 可以使用 `yum repolist [all]` 列出已启用的库或所有的库

```bash
$ yum repolist
Loaded plugins: fastestmirror
Repodata is over 2 weeks old. Install yum-cron? Or run: yum makecache fast
Loading mirror speeds from cached hostfile
 * nux-dextop: li.nux.ro
repo id                                                                                              repo name                                                                                                                         status
!base/7/x86_64                                                                                       CentOS-7                                                                                                                          10,072
!epel/x86_64                                                                                         Extra Packages for Enterprise Linux 7 - x86_64                                                                                    13,604
!extras/7/x86_64                                                                                     CentOS-7                                                                                                                             498
!nux-dextop/x86_64                                                                                   Nux.Ro RPMs for general desktop use                                                                                                2,724
!updates/7/x86_64                                                                                    CentOS-7                                                                                                                           2,458
repolist: 29,356

```
+ 推荐使用 `overlay2` 存储驱动。

#### 卸载旧版本
旧版本的 Docker 被称为 docker 或 docker-engine。如果安装了这些，请卸载它们以及相关的依赖项。
```sh
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```
保留 `/var/lib/docker/` 的内容，包括镜像、容器、卷和网络。 Docker 引擎包现在称为 `docker-ce`。

### 安装方式

以下几种方式可以更具需要自行选择

+  Docker 存储库并从中安装，以便于日后安装和升级任务。这是推荐的方法。

+ 下载rpm包手动安装并日后手动管理升级，这在与一些不能访问互联网的气隙系统上非常有用。

  > 气隙系统（air gapped）指，将电脑与互联网以及任何连接到互联网上的电脑进行隔离。

+ 在测试和开发环境中，也适合使用自动化的便捷脚本来安装 Docker。

#### 使用存储库安装

##### 设置存储库

安装 `yum-utils` 包（其提供了` yum-config-manager` 实用程序）并设置稳定存储库。

> yum-config-manager是对存储库（/etc/yum.repos.d/下的文件）进行增删改查
> 系统默认没有安装这个程序，这个程序在yum-utils包里，可以通过yum install -y yum-utils安装

```bash
 $ sudo yum install -y yum-utils
 $ sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

##### 安装docker引擎

1. 安装最新版Docker Engine 和 containerd

```bash
$ sudo yum install docker-ce docker-ce-cli containerd.io
```

> 如果提示接受 GPG 密钥，请验证指纹是否匹配 060A 61C5 1B55 8A7F 742B 77AA C52F EB6B 621E 9F35，如果匹配，则接受。

2. 要安装特定版本的 Docker Engine，可以在 repo 中列出可用版本，然后选择并安装：

   a. 列出并排序当前存储库中可用的版本。此示例按版本号对结果进行排序，从高到低，并被截断：

   ```sh
   [root@zjlyyq yum.repos.d]# yum list docker-ce --showduplicates | sort -r
    * nux-dextop: li.nux.ro
   Loading mirror speeds from cached hostfile
   Loaded plugins: fastestmirror
   Installed Packages
   docker-ce.x86_64            3:20.10.8-3.el7                    docker-ce-stable
   docker-ce.x86_64            3:20.10.8-3.el7                    @docker-ce-stable
   docker-ce.x86_64            3:20.10.7-3.el7                    docker-ce-stable
   docker-ce.x86_64            3:20.10.6-3.el7                    docker-ce-stable
   .                            .                                  .
   .                            .                                  .
   .                            .                                  .
   docker-ce.x86_64            17.03.3.ce-1.el7                   docker-ce-stable
   docker-ce.x86_64            17.03.2.ce-1.el7.centos            docker-ce-stable
   docker-ce.x86_64            17.03.1.ce-1.el7.centos            docker-ce-stable
   docker-ce.x86_64            17.03.0.ce-1.el7.centos            docker-ce-stable
   Available Packages
   
   ```

   b. 安装特定版本

   ```sh
   $ sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
   ```

3. 启动 Docker

   ```sh
   $ sudo systemctl start docker
   ```

4. 验证 

   ```sh
   [root@zjlyyq ~]# sudo docker run hello-world
   Unable to find image 'hello-world:latest' locally
   latest: Pulling from library/hello-world
   b8dfde127a29: Pull complete
   Digest: sha256:0fe98d7debd9049c50b597ef1f85b7c1e8cc81f59c8d623fcb2250e8bec85b38
   Status: Downloaded newer image for hello-world:latest
   
   Hello from Docker!
   This message shows that your installation appears to be working correctly.
   
   ```

#### 使用rpm包安装

#### 使用便捷脚本安装

## window 10 安装

### 系统要求
#### WSL 2 backend
+ Windows 10 64 位：Home 或 Pro 2004（build 19041）或更高版本，或者 Enterprise 或 Education 1909（build 18363）或更高版本。
+ 在 Windows 上启用 WSL 2 功能。
  ![](/images/Snipaste_2021-08-14_11-59-29.png)
+ 下载并安装 Linux 内核更新包。

公司的电脑是企业版，版本比较低，强行打开Docket Desktop会是如下效果。
![](/images/Snipaste_2021-08-14_16-40-20.png)
![](/images/Snipaste_2021-08-14_16-40-52.png)

# 使用 Docker 镜像
## 下载镜像
### 命令:  
`docker pull [OPTIONS] NAME[:TAG|@DIGEST]`
```plain text
Options:
  -a, --all-tags                Download all tagged images in the repository
      --disable-content-trust   Skip image verification (default true)
      --platform string         Set platform if server is multi-platform capable
  -q, --quiet                   Suppress verbose output
```
### 示例：
下载 Ubuntu 18.04的镜像可以使用 `docker pull ubuntu:18.04`
![](/images/Snipaste_2021-08-14_14-33-57.png)

### 代理加速
有的时候需要使用镜像代理服务来加速Docker镜像的获取过程，可以在Docker的启动配置中增加 `--registry-mirror=proxy_URL` 来指定镜像代理服务器地址（如：https://registry.docker-cn.com）。

### 查看镜像信息

`docker inspect ...`

## 创建镜像
创建镜像有三种方式：基于已有镜像的容器创建、基于本地模板到导入，基于Dockerfile创建。
### 基于已有的容器创建
`docker [container] commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]`

OPTIONS:
   + -a, --author="": 作者信息
   + -c, --change=[]: 提交的时候执行的Dockerfile指令
   + -m, --message="": 提交信息
   + -p, --pause=true: 提交时暂停容器执行

```sh
zjl@zjl:~$ sudo docker commit -m "test port mapping and add some static files" -a "zjl" 4d22dbb1f90 nginx:0.0.1
sha256:570f2403b4c4c749df0d86cb41e88f5daaacd1ac1e4bbe9804b26cd63e9aa2b4
zjl@zjl:~$ sudo docker images
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
nginx        0.0.1     570f2403b4c4   19 seconds ago   139MB
nginx        latest    dd34e67e3371   2 days ago       133MB
zjl@zjl:~$ 
```

### 基于本地模板导入
`docker [image] import [OPTIONS] file|URL|-[REPOSITORY[:TAG]]`

###  基于Dockerfile 创建
Docker 是一个文本文件，，描述了利用给定的指令基于一个父镜像创建新镜像的过程。

## 镜像的存出和载入
`docker [image] save` 和 `docker [image] load`

e.g.

存出
![](/images/Snipaste_2021-08-20_11-32-27.png)

载入

`docker load < nginx_0.0.1.tar`

## 上传镜像

1. 给要上传的镜像打上TAG
   e.g.
   ```sh
   sudo docker tag nginx:0.0.1 ${YOUR DOCKER USERNAME}/nginx:0.0.1
   ```
2. push
   ```sh
   sudo docker push ${YOUR DOCKER USERNAME}/nginx:0.0.1
   ```
# 参考资料
## 网络代理问题：
+ [https://docs.docker.com/config/daemon/systemd/#httphttps-proxy](https://docs.docker.com/config/daemon/systemd/#httphttps-proxy)
+ [https://stackoverflow.com/questions/50392780/error-response-from-daemon-get-http-s-registry-1-docker-io-v2-proxyconnect](https://stackoverflow.com/questions/50392780/error-response-from-daemon-get-http-s-registry-1-docker-io-v2-proxyconnect)

